import scss from './UserItem.module.scss';
import SvgInsert from 'components/images/svg/Svg';
import { useState } from 'react';

const UserItem = ({ userInfo, following }) => {
  const [isFollow, setIsFollow] = useState(userInfo.follow);
  const [followers, setFollovers] = useState(userInfo.followers);
  const followersFormater = val => {
    const format = new Intl.NumberFormat('en-US').format(val);
    return format;
  };
  return (
    <li className={scss.user__item__container}>
      <div className={scss.user__logo}>
        <SvgInsert id="icon-logo" />
      </div>
      <div className={scss.user__item__info}>
        <span className={scss.icon__line}></span>
        <span className={scss.icon__elips}></span>
        <div className={scss.user__image__container}>
          <img src={userInfo.avatar} alt={userInfo.user} />
        </div>
        <h2 className={scss.user__item__info_title}>{userInfo.user}</h2>
        <ul>
          <li className={scss.user__item__info_discription}>
            <span className={scss.user__info_number}>{userInfo.tweets}</span>
            tweets
          </li>
          <li className={scss.user__item__info_discription}>
            <span className={scss.user__info_number}>
              {followersFormater(followers)}
            </span>
            followers
          </li>
        </ul>
        {isFollow ? (
          <button
            onClick={() => {
              following(userInfo.id);
              setIsFollow(!isFollow);
              setFollovers(followers - 1)
            }}
            className={`${scss.secondary__btn} ${scss.btn}`}
          >
            Following
          </button>
        ) : (
          <button
            onClick={() => {
              following(userInfo.id);
              setIsFollow(!isFollow);
              setFollovers(followers + 1)
            }}
            className={`${scss.primary__btn} ${scss.btn}`}
          >
            follow
          </button>
        )}
      </div>
    </li>
  );
};

export default UserItem;
