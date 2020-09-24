import React from 'react'

function Item({ item, index }) {
	return (
		<div className="row" style={{padding: '10px', borderBottom: '1px solid #ddd'}} key={`ADDR${index}`}>
			<div>[도로명] {item.roadAddrPart1}</div>
			<div>[지번] {item.jibunAddr}</div>
		</div>
	);
};

export default Item
