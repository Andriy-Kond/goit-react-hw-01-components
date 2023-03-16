import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './FriendList.module.css';

// export const FriendListItem = ({ id, isOnline, avatar, name }) => {
export const FriendListItem = ({ propsArr: { isOnline, avatar, name } }) => {
  return (
    <li className={css.Item}>
      <span className={clsx(css.Status, isOnline && css.IsOnline)}></span>
      <img className={css.Avatar} src={avatar} alt="User avatar" />
      <p className={css.Name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  propsArr: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
