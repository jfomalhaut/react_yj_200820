import React, { useEffect, useState } from 'react';
import Items from '../jsons/items.json';
const nf = new Intl.NumberFormat();

const List = ({ match: { params: { category } } }) => {
	const [items, setItems] = useState([]);

	const transType = cate => {
		switch(cate) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	const transKor = cate => {
		switch(cate) {
			case 1: return '수산물';
			case 2: return '과일';
			case 3: return '야채';
		}
	}

	useEffect(() => {
		if (category === 'all') {
			setItems(Items);
			return;
		}

		const type = transType(category);
		const temp = Items.filter(item => item.type === type);
		setItems(temp);
	}, [category]);

	return (
		<div className="container">
			<div className="items">
				{items.map(item => (
					<div className="item" key={`CATEGORY_ITEM${item.id}`}>
						<div className={`img color${item.type}`} />
						<div className="info">
							<div className="top">
								<span className={`type border${item.type}`}>{transKor(item.type)}</span>
								<span className="name">{item.name}</span>
							</div>
							<div className="price">{nf.format(item.price)}원</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;