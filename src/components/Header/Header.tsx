import styles from '@/components/Header/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>AIKive</span>
    </div>
  );
};

export default Header;
