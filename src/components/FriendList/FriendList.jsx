import PropTypes from 'prop-types';

import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ propFriendsArr }) => {
  return (
    <ul className={css.UserFriendList}>
      {propFriendsArr.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            propsArr={{ avatar, name, isOnline }}
            key={id}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  propFriendsArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
};
