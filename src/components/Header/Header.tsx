import styles from '@/components/Header/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <span className={styles.logo}>AIKive</span>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <button>AI 서비스</button>
        <span className={styles.divider}>|</span>
        <button>AI 강의</button>
      </div>
    </div>
  );
};

export default Header;
