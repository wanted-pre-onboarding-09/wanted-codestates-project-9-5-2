import React from 'react';
import styles from './Search.module.css';
import UserInfo from './UserInfo';
import UserInfoDescription from './UserInfoDescription';

const Search = ({ getStarredRepositories, inputRef, user }) => {
  const onSearch = (event) => {
    if (event.key === 'Enter') {
      const value = inputRef.current?.value;
      if (value === '') return;
      getStarredRepositories(value);
    }
  };

  console.log(user);
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
      {user && (
        <>
          <UserInfo
            avartar={user.avatar_url}
            userId={user.login}
            nickname={user.name}
          />
          <UserInfoDescription />
        </>
      )}
    </div>
  );
};

// Search.propTypes = {
//   setStarredData: PropTypes.func,
// };

export default Search;
