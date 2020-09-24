import React, { useEffect } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Main, Mypage, SignIn } from './routers';
import { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GuardRoute } from './guards';
import Axios from 'axios';
import { Auth } from './actions';

const GlobalStyles = createGlobalStyle`
	body {
		background-color: #f0f0f0;
	}
	* {
		margin: 0; padding: 0;
	}
`;

const App = () => {
	const dispatch = useDispatch();
	const logged = useSelector(({ authReducer }) => authReducer.logged);

	const verifyToken = async () => {
		const sessionToken = window.sessionStorage.getItem('token');
		// 세션에 담긴 토큰을 받아오고.
		// 이 토큰이 유효한 토큰인지 인증.
		// 토큰을 인증을 위한 API로 보내서 검토를 받고.
		// 유효한 token이면 로그인 유지,
		// 그렇지 않으면 세션 삭제와 함께 login 페이지로 다시 redirect
		if (sessionToken) {
			const requestOptions = {
				method: 'get',
				url: 'https://kpec.kr/api/verifyToken',
				headers : {
					'Content-type': 'application/json',
					'Access-Control-Allow-Headers': 'x-access-token',
					'x-access-token': sessionToken
				}
			};

			try {
				const { data: { authorized, token, decoded: { exp, account } } } = await Axios(requestOptions);
				const currentTime = Math.floor(Date.now() / 1000);
				// authorized : 세션의 유효함 체크 true / false
				// token : 새로운 token. 갱신된 token. 왜냐하면 유효기간이 30분
				// decoded : 복호화 된 token에서 읽어온 data,
				// exp : 만료되는 시간.
				// account: 접속한 아이디.
				if (authorized && currentTime < exp) { // 유효함과 동시에 현재시각보다 만료시간이 더 미래여야 한다.
					window.sessionStorage.setItem('token', token); // 위 사항을 충족할 시에는 새로 발급된 토큰(유효시간 연장된)을 세션에 저장한다.
					dispatch(Auth.sessionLogin()); // 인증이 되었으므로 dispatch로 logged 값을 변경해준다.
				} else {
					console.log('1');
					window.sessionStorage.removeItem('token');
				}
			} catch (err) {
				console.log(err);
				window.sessionStorage.removeItem('token');
			}
		}else {
			console.log('3');
			window.sessionStorage.removeItem('token');
		}
	}

	useEffect(() => {
		// 새로고침이 된 상황
		verifyToken();
	}, []);

	return (
		<BrowserRouter>
			<GlobalStyles/>
			<ul>
				<li>
					<Link to="/main">메인페이지</Link>
				</li>
				<li>
					<Link to="/signin">로그인페이지</Link>
				</li>
				<li>
					<Link to="/mypage">마이페이지</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/signin" render={(props) => (
					logged ? (
						<Redirect to="/main" />
					) : (
						<SignIn {...props} />
					)
				)} />
				<GuardRoute path="/mypage" component={Mypage} auth={logged} />
				<Route path="/main" render={(props) => (
					<Main {...props} />
				)} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
