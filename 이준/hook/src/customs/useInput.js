import { useState } from "react";

const useInput = (initailValue) => {
	const [value, setValue] = useState(initailValue);

	const onChange = ev => {
		const { target: { value } } = ev;
		setValue(value);
	};

	return [value, onChange];
};

export default useInput;