import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from '../actions';
import styled from 'styled-components';

const BUTTON = styled.button`
	font-size: 30px;
	background-color: ${props => props.background};
	color: ${props => props.background === 'darkgray' ? 'white' : 'black'};

	&:hover {
		color: blue;
	}
	&:before {
		content: "나는버튼";
	}
`;

const Plus = styled.div`
	width: 500px;
	height: 500px;
	position: relative;
	
	&:before {
		content: "";
		width: 500px;
		height: 2px;
		position: absolute;
		left: 0%; top: 50%;
		transform: translateY(-50%);
		background: gray;
	}
	&:after {
		content: "";
		height: 500px;
		width: 2px;
		position: absolute;
		left: 50%; top: 0;
		transform: translateX(-50%);
		background: gray;
	}
`;



const Home = () => {
	const dispatch = useDispatch();
	const onLogin = () => {
		dispatch(Auth.login());
	};
	const data = useSelector(({ authReducer }) => authReducer.data);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div>
			<h1>Home Component</h1>
			<BUTTON background="darkgray" onClick={onLogin}>login</BUTTON>
			<BUTTON background="white">logout</BUTTON>
			<Plus />
			<div style={{width: '300px', height: '300px', border: '1px solid', position: 'relative'}}>
				<div style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', background: 'red'}} />
			</div>
		</div>
	);
};

export default Home;
