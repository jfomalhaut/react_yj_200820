import React, { useState } from 'react';

const Input = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [tel, setTel] = useState("");
	const [phoneBook, setPhoneBook] = useState([]);

	const onChangeName = ev => {
		
	};

	const onChangeAge = ev => {
		
	};

	const onChangeTel = ev => {
		
	};

	const insert = () => {

	};


	return (	
		<div className="container">
			<div className="field">
				<input value={name} onChange={onChangeName}/><br/>
				<input value={age} onChange={onChangeAge}/><br/>
				<input value={tel} onChange={onChangeTel}/>
				<button onClick={insert}>입력</button>
			</div>
			<div className="list">
				{phoneBook.map(item => (
					<div className="item">
						<div className="name">{item.name}</div>
						<div className="age">{item.age}</div>
						<div className="tel">{item.tel}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Input;