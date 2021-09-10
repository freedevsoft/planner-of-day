import styles from './Header.module.css';

const Header = (): JSX.Element => {

  return (
    <header className="relative">
      <img
        className="w-full h-48 md:hidden"
        alt="background"
        src={'/bg-mobile-light.jpg'}
      />

      <img
        className="w-full h-72 hidden md:block"
        alt="background"
        src={'/bg-desktop-light.jpg'}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Plan List</h1>
      </div>
    </header>
  );
};

export default Header;
