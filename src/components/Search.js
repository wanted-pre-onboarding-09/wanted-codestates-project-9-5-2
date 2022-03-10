import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/user/userAsyncThunk';
import styles from './Search.module.css';
import UserInfo from './UserInfo';
import UserInfoDescription from './UserInfoDescription';

const Search = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { avartar, nickname } = useSelector((state) => state.user);
  const [userId, setUserId] = useState('mynameisjisoo');

  const onSearch = (event) => {
    if (event.key === 'Enter') {
      const value = inputRef.current.value;
      if (value === '') return;
      setUserId(value);
    }
  };

  useEffect(() => {
    dispatch(getUser({ userId: userId }));
  }, [userId]);

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Github 아이디 검색"
          className={styles.input}
          ref={inputRef}
          onKeyPress={onSearch}
        />
        <span className={styles.enter}>⏎</span>
      </div>
      {userId && (
        <>
          <UserInfo avartar={avartar} nickname={nickname} userId={userId} />
          <UserInfoDescription />
        </>
      )}
    </div>
  );
};

export default Search;
