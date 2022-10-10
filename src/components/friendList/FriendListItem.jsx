import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, }) => {

    return (
        <>
            {isOnline ? <span className={css.statusOnline}>On</span> : <span className={css.statusOffline}>Off</span> }
            
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.name}>{name}</p>
        </>
    )
    
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}