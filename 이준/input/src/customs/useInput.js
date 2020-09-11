import { useState } from 'react';

const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);

	const onChange = (ev) => {
		const { target: { value } } = ev;
		if (value) {
			setData(value);
		} else {
			setData("");
		}
	};

	return [data, onChange, setData];
};

export default useInput;