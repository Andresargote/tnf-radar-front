import styles from "../../styles/components/Button.module.css";

type Props = {
    color: string,
    text: string
}

export default function Button({ color, text }: Props) {
    return (
        <button className={color === "green" ? styles.buttonGreen : ""}>
            {text}
        </button>
    );
}