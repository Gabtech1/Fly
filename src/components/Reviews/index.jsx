import styles from './Reviews.module.css';
import Image from 'next/image';
import Review from '../../../public/review.webp'
import Review2 from '../../../public/review2.webp'

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.stories}>
        <div className={styles.story_bg}>
          <div className={styles.story}>
            <Image src={Review} alt="Customer photo" className={styles.img} />
            <div className={styles.text}>
              <h3>"Foram os melhores dias deste ano"</h3>
              <p>
                Eu nunca pensei que saltar de paraquedas poderia ser uma experiência tão transformadora, fomos recebidos com muita atenção e profissionalismo pela equipe, que nos deixou super à vontade e confiantes. A sensação de liberdade e adrenalina quando você está lá em cima, voando no céu, é indescritível! É uma emoção que fica marcada para sempre. Foram os melhores dias deste ano, e eu definitivamente faria tudo de novo.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.story_bg}>
          <div className={styles.story}>
            <Image src={Review2} alt="Customer photo" className={styles.img} />
            <div className={styles.text}>
              <h3>"Perfeito para os amantes de aventura! Pura adrenalina"</h3>
              <p>
                Sempre fui apaixonado por aventuras radicais, mas essa experiência superou todas as minhas expectativas! Desde o treinamento inicial até o momento do salto, tudo foi impecável. A equipe foi incrível, passando muita segurança e explicando cada detalhe do processo. Foi pura adrenalina! Se você gosta de aventura e busca uma experiência única, os tours da FLY é simplesmente perfeito!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}