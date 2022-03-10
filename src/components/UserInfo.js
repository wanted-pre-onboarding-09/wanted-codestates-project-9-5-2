import React from 'react';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles['user-info__container']}>
      <img
        src="https://avatars.githubusercontent.com/u/54147313?v=4"
        alt="유저 프로필 이미지"
        className={styles['user-info__image']}
      />
      <div className={styles['user-info__info']}>
        <a
          href={`https://github.com/zeromountain`}
          className={styles['user-info__link']}
        >
          zeromountain
        </a>
        <span className={styles['user-info__name']}>(Yeongsan-Sonny)</span>
      </div>
    </div>
  );
};

export default UserInfo;
