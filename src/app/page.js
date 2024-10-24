import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Fly from '../../public/fly.avif';
import Ice from '../../public/ice.webp'
import Beach from '../../public/beach.webp'
import Grind from '../../public/grind.webp'
import Cards from "@/components/Cards";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Home section */}
      <section className={styles.home}>
        <div className={styles.home_text}>
          <h1>sinta a adrenalina</h1>
          <p>cada salto é uma nova história </p>
          <Link href='#tours' className={styles.arrow}>↓</Link>
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

      {/* Tours section */}
      <section className={styles.tours} id='tours'>
        <h3 className={styles.title}>Explore os melhores horizontes</h3>
        <div className={styles.wrapper}>
          {/* Cards components with props */}
          <Cards src={Ice} name={'Mt. Esja - Islândia'} days={'Tour de 7 dias'} people={'Até 20 pessoas'} guides={'8 Guias'} comfort={'Hotel'} level={'Dificuldade: Difícil'} price={'R$11.999,00'} />
          <Cards src={Grind} name={'Grindelwald - Suíça'} days={'Tour de 9 dias'} people={'Até 30 pessoas'} guides={'7 Guias'} comfort={'Tendas privadas no acampamento'} level={'Dificuldade: Média'} price={'R$8.999,00'} />
          <Cards src={Beach} name={'Ilha do Campeche - Brasil'} days={'Tour de 5 dias'} people={'Até 25 pessoas'} guides={'5 Guias'} comfort={'Tendas privadas no acampamento'} level={'Dificuldade: Fácil'} price={'R$4.999,00'} />
        </div>
      </section>

      {/* Reviews and footer components */}
      <Reviews />
      <Footer />
    </div>
  );
}
