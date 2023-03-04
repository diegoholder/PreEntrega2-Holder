import styles from "./CartWidget.module.css";
const CartWidget = () => {
    return (
        <div>
            <img className={styles.cartContainer} src="https://res.cloudinary.com/dbzdoyjbv/image/upload/v1677905878/181598_nslleg.png" alt="Shopping cart" />
        </div>
    )
}

export default CartWidget