import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStarred } from './store/starred/starredAsyncThunk';
import { getUser } from './store/user/userAsyncThunk';

const Reduxtest = (props) => {
  const { avartar, nickname } = useSelector((state) => state.user);
  const { starredData } = useSelector((state) => state.starred);

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

  return <div>ddd</div>;
};

export default Reduxtest;
