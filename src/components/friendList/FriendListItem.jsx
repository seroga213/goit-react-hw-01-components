import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendListItem = ({id, avatar, name, isOnline, }) => {

    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}></span>  
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.name}>{name}</p>
        </li>
    )
    
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
}