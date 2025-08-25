import styles from "../styles/header.module.css";
import logoHeader from "../assets/logoHeader.png"; 

function Header() {
    return (
        <header className={styles.header}>
            <img src={logoHeader} alt="Logo Header" className={styles.logo}/>
        </header>
    );
}

export default Header;