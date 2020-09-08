import React from 'react';
import useInput from '../customs/useInput';

const Input = () => {
	const [name, setName] = useInput("");
	const [age, setAge] = useInput("");

	return (
		<div className="container">
			<div>
				<input value={name} onChange={setName} placeholder="이름을 입력하세요.." />
			</div>
			<div>
				<input value={age} onChange={setAge} placeholder="연령을 입력하세요.." />
			</div>
			<h1>{name}</h1>
			<h1>{age}</h1>
		</div>
	);
};

export default Input;