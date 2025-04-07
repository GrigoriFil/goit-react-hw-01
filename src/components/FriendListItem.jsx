import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={statusClass}>{statusText}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;