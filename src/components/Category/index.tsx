import styles from "./Category.module.css";

type Props = {
    category: string;
}

export default function Category({ category} : Props) {

    const normalizedCategory = (category: string) => {
        return category.toLowerCase();
    }

    return (
        <div className={normalizedCategory(category) === "cripto" ? styles.btc : styles.nft}>
            <div className={styles.circle}/>
            <span className={styles.category}>{normalizedCategory(category)}</span>
        </div>
    );
}