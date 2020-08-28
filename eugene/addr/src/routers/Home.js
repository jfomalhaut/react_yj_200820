import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const VIEW = 10

const Home = () => {
	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [total, setTotal] = useState(0);
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = ev => {
		// const value = ev.target.value;
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const search =()=>{
		const url = `${REQUEST_URL}?confmKey=${CONFIRM_KEY}&currentPage=1&countPerPage=${VIEW}&resultType=json&keyword=${keyword2}`
		Axios.get(url).then(res=>{
			const{data:{results:{common:{totalCount}, juso}}} = res;
			setTotal(totalCount * 1);
			setList(juso);
		})
	}

	useEffect(()=>{
		search()
	},[keyword2])
	
	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} />
			<button onClick={()=>setKeyword2(keyword)}>검색</button>
			{keyword2 === '' ?(
				<h1>검색어를 입력해 주세요</h1>
			):(
				<h1><span style={{ color: 'red'}}> '{keyword}'</span>에 대한 검색결과 ({total}개)</h1>
			)
			}
			<div className='list'>
				{list.map(item => (
					<div className='row'>
						<div>[도로명]{item.roadAddrPart1}</div>
						<div>[지번]{item.jibunAddr}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;