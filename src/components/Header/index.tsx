import styles from "../../styles/components/Header.module.css";
import Button from "../Button";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>tnf<span>radar</span></h1>
                <Button color="green" text="Apóyanos"/>
            </div>
        </header>
    )
}