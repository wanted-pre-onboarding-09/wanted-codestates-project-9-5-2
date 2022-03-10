import React from 'react';

import styles from './UserInfoDescription.module.css';

const UserInfoDescription = () => {
  return (
    <div className={styles['user-info__description']}>
      * 유저들 간의 스타를 누른 리포지토리 관계를 보여줍니다.
    </div>
  );
};

export default UserInfoDescription;
