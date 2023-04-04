import styles from "./Inicio.module.scss";
import Profile from "../../assets/img/profiles-picture1.png";
import classNames from "classnames";
import {ReactComponent as WhatsApp} from 'assets/svg/whatsapp.svg'
import {ReactComponent as Linkedin} from 'assets/svg/linkedin.svg'
import {ReactComponent as Github} from 'assets/svg/github.svg'
import efeito1 from 'assets/img/efeito1.png'
import efeito2 from 'assets/img/efeito2.png'
interface Props {
  tema: string;
  setTema: React.Dispatch<React.SetStateAction<string>>;
}

export default function Inicio() {
  return (
    <>
      <section className={styles.cop}>
        <section className={styles.principal}>
          <img
            className={classNames({
              [styles["principal__profile--picture"]]: true,
            })}
            src={Profile}
            alt="Imagem de perfil"
          />
          <div className={styles['div__salva']}>
            <div>
              <h1 className={styles["principal__titulo"]}>Antony Maziero Warken</h1>
            </div>
            <div className={styles["principal__paragrafo"]}>
              <p>
                Crio produtos frontend estáveis e escaláveis com boa experiência
                usuária
              </p>
            </div>
          </div>
        </section>
        <section className={styles.rodape}>
          <ul className={styles.lista}>
						<div className={styles.scope}>
							<li className={styles["lista.item"]}>
								<WhatsApp className={styles["lista__imagem"]}></WhatsApp>
								<a href="https://wa.me/5549991042777">
									<p>(49) 99104-2777</p>
								</a>
							</li>
						</div>
            <div className={styles.scope}>
							<li className={styles["lista.item"]}>
								<Linkedin className={styles["lista__imagem"]}></Linkedin>
								<a href="https://www.linkedin.com/in/antony-maziero-warken-b88306231/" target='_blank'>
									<p>Antony Maziero Warken</p>
								</a>
							</li>
						</div>
            <div className={styles.scope}>
							<li className={styles["lista.item"]}>
							<Github className={styles["lista__imagem"]}></Github>
								<a href="https://github.com/mwantony" target='_blank'>
									<p>mwantony</p>
								</a>
							</li>
						</div>
          </ul>
        </section>
      </section>

    </>
  );
}
