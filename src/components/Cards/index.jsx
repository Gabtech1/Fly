'use client';
import { useState } from 'react';
import styles from './Cards.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Cards(props) {
    const [change, setChange] = useState(false);

    function changeCard(){
        setChange(prevState => !prevState);
    }

    return (
                <div className={styles.card}>
                    <div className={`${styles.front} ${change ? styles.active : ''}`}>
                        <Image src={props.src} alt="tour picture" className={styles.img} />
                        <h3 className={styles.name}>{props.name}</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}>{props.days}</li>
                            <li className={styles.item}>{props.people}</li>
                            <li className={styles.item}>{props.guides}</li>
                            <li className={styles.item}>{props.comfort}</li>
                            <li className={styles.item}>{props.level}</li>
                        </ul>
                        <button className={styles.btn} onClick={changeCard}> Preço → </button>
                    </div>

                    <div className={`${styles.back} ${change ? styles.active : ''}`}>
                        <button className={styles.btn} onClick={changeCard}> ← voltar </button>
                        <h3 className={styles.price}>{props.price}</h3>
                        <Link href='#tours' className={styles.link}>Agende aqui</Link>
                    </div>
                </div>
    )
}