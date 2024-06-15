import css from './FriendListItem.module.css';

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={css.title}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;


