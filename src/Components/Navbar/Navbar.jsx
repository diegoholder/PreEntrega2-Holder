import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {

    return (
        <nav className={styles.containerNavbar}>
            <img className={styles.imageContainer} src="https://res.cloudinary.com/dbzdoyjbv/image/upload/v1677904156/125_bwgt9a.png" alt="logo" />
            <ul className={styles.containerList}>
                <li>Bebidas</li>
                <li>Salados</li>
                <li>Dulces</li>
            </ul>
            <CartWidget />
        </nav>
    );
};
export default Navbar