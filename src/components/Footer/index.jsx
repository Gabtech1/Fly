import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h2>
                        <span>F</span>
                        <span>L</span>
                        <span>Y</span>
                    </h2>
                </div>
                <div className={styles.contact}>
                    <h3>Contato</h3>
                    <ul>
                        <li>+55 11 99999 9999</li>
                        <li>contato@fly.com</li>
                        <li>Rua paraquedas, 79 - Monte</li>
                        <li>São Paulo - SP</li>
                    </ul>
                </div>
                <p className={styles.order}>Agende já sua próxima aventura!</p>
            </div>
            <p className={styles.copy}>FLY © Copyright</p>
        </footer>
    )
}