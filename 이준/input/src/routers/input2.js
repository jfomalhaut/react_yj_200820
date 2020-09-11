import React from 'react';
import useInput from '../customs/useInput';

const Input2 = () => {
	const [name, onChangeName] = useInput("");
	const [age, onChangeAge] = useInput("");
	const [phone, onChangePhone] = useInput("");

	const onInsert = () => {
		console.log(name, age, phone);
	};

	return (
		<div>
			<input value={name} onChange={onChangeName} />
			<input value={age} onChange={onChangeAge} />
			<input value={phone} onChange={onChangePhone} />
			<div>
				<button onClick={onInsert}>등록</button>
			</div>
		</div>
	);
};

export default Input2;