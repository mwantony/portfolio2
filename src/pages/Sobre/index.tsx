import styles from './Sobre.module.scss'
import profile2 from 'assets/img/profiles-picture2.png'
import {ReactComponent as WhatsApp} from 'assets/svg/whatsapp2.svg'
export default function Sobre() {
    return(
        <>
            <section className={styles.sobre}>
                <div>
                    <h1 className={styles['sobre__titulo']}>Antony Maziero Warken</h1>
                    <p className={styles['sobre__paragrafo']}>Front end Júnior</p>
                </div>
                <img src={profile2} alt="Imagem de perfil" className={styles['informacoes__imagem']} />
            </section>
            <section className={styles.informacoes}>
                <h2 className={styles['informacoes__titulo']}>Escolaridade:</h2>
                <p className={styles['informacoes__paragrafo']}>Ensino Médio - cursando</p>
                <h2 className={styles['informacoes__titulo']}>Idiomas</h2>
                <p className={styles['informacoes__paragrafo']}>Inglês fluente <a href="https://drive.google.com/drive/folders/1PBLytP5znjVN0B6aE7kRGZd7Ca_uVNrg?usp=sharing" target='_blank'>(certificados)</a></p>
                <h2 className={styles['informacoes__titulo']}>Tecnologias</h2>
                <ul className={styles.lista}>
                    <li className={styles['lista__item']}>ReactJS</li>
                    <li className={styles['lista__item']}>TypeScript</li>
                    <li className={styles['lista__item']}>Nodejs</li>
                    <li className={styles['lista__item']}>JavaScript</li>
                    <li className={styles['lista__item']}>HTML - CSS</li>
                    <li className={styles['lista__item']}>MySQL</li>
                    <li className={styles['lista__item']}>MongoDB</li>
                </ul>
                <p className={styles['informacoes__paragrafo']}>Cursos <a href="https://drive.google.com/drive/folders/1wr3oVUfOVjZl6U79DRnjwSMzIx8Fz5AC?usp=sharing" target='_blank'>certificados</a></p>
            </section>
            <a href="https://wa.me/5549991042777">
                <WhatsApp className={styles.whatsapp}></WhatsApp>
            </a>

        </>
    )
}