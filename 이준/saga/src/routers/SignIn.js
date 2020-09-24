import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Auth } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
	const dispatch = useDispatch();
	const [account, setAccount] = useState("");
	const [password, setPassword] = useState("");
	const failure = useSelector(({ authReducer }) => {
		return authReducer.failure;
	});

	const onChangeAccount = ev => {
		const { target: { value } } = ev;
		setAccount(value);
	};

	const onChangePassword = ev => {
		const { target: { value } } = ev;
		setPassword(value);
	};

	const onSubmit = ev => {
		ev.preventDefault();
		dispatch(Auth.login({ account, password }));
	};

	useEffect(() => {
		if (failure !== 0) {
			setPassword("");
		}
	}, [failure]);

	return (
		<Background>
			<SignInBlock onSubmit={onSubmit}>
				<h1>로그인</h1>
				<div>
					<input value={account} onChange={onChangeAccount} placeholder="아이디를 입력하세요" />
				</div>
				<div>
					<input value={password} onChange={onChangePassword} type="password" autoComplete="off" placeholder="패스워드를 입력하세요" />
				</div>
				<Submit>로그인</Submit>
				{failure > 0 ? (
					<p style={{ color: 'red' }}>로그인 실패! 실패횟수: {failure}</p>
				) : null }
			</SignInBlock>
		</Background>
	);
};

export default SignIn;

const Background = styled.div`
	background: #f0f0f0;
	min-height: 100vh;
`;

const SignInBlock = styled.form`
	background: white;
	padding: 40px;
	margin: 100px auto;
	width: 600px;
	border: 1px solid #ddd;
	h1 {
		margin-bottom: 20px;
	}
	input {
		width: 100%; height: 60px; font-size: 20px; padding: 10px; box-sizing: border-box;
		margin-bottom: 20px; outline: none;
	}
`;

const Submit = styled.button`
	width: 100%; background: navy; color: white; border: none; cursor: pointer; text-align: center;
	height: 60px; font-size: 20px;
`;