import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Page1 = () => {
	const { state, dispatch } = useContext(AppContext);

	const setText = () => {
		dispatch({ type: 'SET_TEXT', value: '1페이지에서 변경' });
	};
	
	return (
		<div>
			{state}
			<button onClick={setText}>글자 변경해주기</button>		
		</div>
	)
}

export default Page1
