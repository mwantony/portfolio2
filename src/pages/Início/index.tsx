import styles from './Inicio.module.scss'
import Profile from '../../assets/img/profiles-picture1.png'
import classNames from 'classnames'
interface Props {
    tema: string,
    setTema: React.Dispatch<React.SetStateAction<string>>
}

export default function Inicio() {
    return (
        <>
            <section className={styles.principal}>
                <img className={classNames({
                    [styles["principal__profile--picture"]] : true
                })} src={Profile} alt="Imagem de perfil" />
                <h1 className={styles["principal__titulo"]}>Antony Maziero Warken</h1>
                <div 
                className={styles["principal__paragrafo"]}>
                    <p>Crio produtos frontend estáveis e escaláveis com boa experiência usuária</p>
                </div>
            </section>
            <section className='rodape'>
                
            </section>
        </>
    )
}