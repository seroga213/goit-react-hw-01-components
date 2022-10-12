import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendsList.module.css';


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(item => (
                <li key={item.id} className={css.item}>
                    <FriendListItem 
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </ul>

    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.oneOf([null]).isRequired]),
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
    }))
}