import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../actions/auth";
import st from "styled-components";

const BUTTON = st.button`
font-size : 30px;
background: ${(props) => props.background};

color: ${(props) => (props.background === "darkgray" ? "white" : "black")};

&: hover {
  color:blue
};

&: before{
  content: "버튼"
};
`;

const Plus = st.div`
  width: 500px;
  height: 500px;
  position : relative;

  &:before{
    content: "";
    width: 500px;
    height: 2px;
    position:absolute;
    left: 0%; top: 50%;
    transfrom: translateY(-50%);
    background: gray;
  }

  &:after{
    content: "";
    width: 2px;
    height: 500px;
    position:absolute;
    left: 50%; top: 0;
    transfrom: translateX(-50%);
    background: gray;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ authReducer }) => authReducer.data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onClickHandler = () => {
    dispatch(Auth.login({ id: "what", pwd: "the" }));
  };

  return (
    <div>
      <h1>Home Component</h1>
      <BUTTON background="darkgray" onClick={onClickHandler}>
        login
      </BUTTON>
      <BUTTON background="white">logout</BUTTON>
      <Plus />
    </div>
  );
};

export default Home;
