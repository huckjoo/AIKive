import styles from './Header.module.css';
import { RiRobot2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div className={styles.header}>
      <RiRobot2Line className={styles.icon} />
    </div>
  );
};

export default Header;
