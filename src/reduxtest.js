import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ForceGraph from './components/ForceGraph';
import { getStarred } from './store/starred/starredAsyncThunk';
import { getUser } from './store/user/userAsyncThunk';

const Reduxtest = (props) => {
  const { avartar, nickname } = useSelector((state) => state.user);
  const { starredData } = useSelector((state) => state.starred);

  const canvasRef = useRef();

  console.log(avartar, nickname, starredData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser({ userId: 'zeromountain' }));
  }, []);

  useEffect(() => {
    dispatch(getStarred({ userId: 'zeromountain' }));
  }, []);

  console.log(avartar);
  console.log(nickname);
  console.log(starredData);

  return <canvas ref={canvasRef}></canvas>;
};

export default Reduxtest;
