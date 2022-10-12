import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendsList.module.css';


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.name}
                />
            ))}
        </ul>
    );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};