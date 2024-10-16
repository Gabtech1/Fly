import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Fly from '../../public/fly.png';
import Cards from "@/components/Cards";
import Ice from '../../public/ice.jpg'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.home}>
        <div className={styles.home_text}>
          <h1>sinta a adrenalina</h1>
          <p>cada salto é uma nova história </p>
          <Link href='/' className={styles.arrow}>↓</Link>
        </div>
        <Image src={Fly} alt="parachute" className={styles.fly} />
        <div className={styles.logo}>
          <h2>
            <span>F</span>
            <span>L</span>
            <span>Y</span>
          </h2>
        </div>
      </section>

      <section className={styles.tours} id='tours'>
        <h3 className={styles.title}>Explore os melhores horizontes</h3>
        <div className={styles.wrapper}>
          <Cards src={Ice} name={'Montanhas da Islândia'} days={'Tour de 7 dias'} people={'Até 20 pessoas'} guides={'5 Guias'} comfort={'Tendas privadas no acampamento'} level={'Dificuldade: Difícil'} price={'R$2.999,00'}/>
          <Cards src={Ice} name={'Montanhas da Islândia'} days={'Tour de 7 dias'} people={'Até 20 pessoas'} guides={'5 Guias'} comfort={'Tendas privadas no acampamento'} level={'Dificuldade: Difícil'}/>
          <Cards src={Ice} name={'Montanhas da Islândia'} days={'Tour de 7 dias'} people={'Até 20 pessoas'} guides={'5 Guias'} comfort={'Tendas privadas no acampamento'} level={'Dificuldade: Difícil'}/>
        </div>
      </section>
    </main>
  );
}
