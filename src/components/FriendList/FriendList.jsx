import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriedList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(friend => (
        <li className={css.FriendList} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;



