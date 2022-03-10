import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserInfo.module.css';

const UserInfo = ({ avartar, nickname, userId }) => {
  return (
    <div className={styles['user-info__container']}>
      <img
        src={avartar}
        alt="유저 프로필 이미지"
        className={styles['user-info__image']}
      />
      <div className={styles['user-info__info']}>
        <a
          href={`https://github.com/${userId}`}
          className={styles['user-info__link']}
        >
          {userId}
        </a>
        <span className={styles['user-info__name']}>({nickname})</span>
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  avartar: PropTypes.string,
  nickname: PropTypes.string,
  userId: PropTypes.string.isRequired,
};
