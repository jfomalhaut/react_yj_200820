import React, { useState, useEffect } from 'react';
import Items from '../jsons/fishes.json';
import './List.css';

const listStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '25px',
	margin: '50px auto',
	width: '1000px'
};

const List = () => {
	const [list, setList] = useState([]);

	const remove = id => {
		const temp = list.filter(item => item.id !== id);
		setList(temp);
	};

	const onCheck = id => {
		const temp = list.map((item) => (item.id === id ? { ...item, check: !item.check } : item));
		setList(temp);
	};

	const removeAll = () => {
		setList([]);
	};

	const removeCheck = () => {
		const temp = list.filter(item => !item.check);
		setList(temp);
	};

	const checkAll = () => {
		const flag = list.some(item => !item.check);
		const temp = list.map(item => ({...item, check: flag }));
		setList(temp);
		
		// check가 false인 것이 하나라도 있는지 여부.
		// flag가 true일 경우: 체크가 되지 않은 것이 있다. => 전체선택을 해줘야 한다.
		// flag가 false인 경우: 체크가 되지 않은 것이 하나도 없다. 즉 전체 체크가 된 상태 => 전체 다 체크를 풀어주어야 한다.
	}

	useEffect(() => {
		setList(Items);
	}, []);



	return (
		<div className="container">
			<button onClick={checkAll}>전체선택</button>
			<button onClick={removeAll}>전체삭제</button>
			<button onClick={removeCheck}>선택삭제</button>

			<div className="list" style={listStyle}>
				{list.map(item => (
					<div className="item">
						<span className={`checkbox ${ item.check ? 'checked' : '' }`} onClick={() => onCheck(item.id)} />
						<img src={item.src} style={{width: '100%'}} onClick={() => onCheck(item.id)} />
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
						</div>
						<button onClick={() => remove(item.id)}>삭제</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;