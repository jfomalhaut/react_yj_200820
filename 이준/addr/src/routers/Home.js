import React, { useState } from 'react';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const RUQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";

const Home = () => {
	const [keyword, setKeyword] = useState("");

	const onChangeKeyword = ev => {
		// const value = ev.target.value;
		const { target: { value } } = ev;
		setKeyword(value);
	};
	
	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} />
			<h1>{keyword}</h1>
		</div>
	);
};

export default Home;