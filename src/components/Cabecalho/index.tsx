import {ReactComponent as MenuIcon} from "../../assets/svg/menu-icon.svg"
import MenuAparecer from 'assets/img/menu.png'
import styles from './Cabecalho.module.scss'
import classNames from "classnames"
interface Props {
    aparecer: boolean
    setAparecer: React.Dispatch<React.SetStateAction<boolean>>
}
export function Cabecalho({aparecer, setAparecer}: Props) {
    const menu = [
        {
            titulo: "Início"
        },
        {
            titulo: "Prjetos"
        },
        {
            titulo: "Sobre"
        }
    ]

    return (
        <>
            <header className={styles.cabecalho}>
                <MenuIcon onClick={() => {
                    setAparecer(true)
                }} className={styles["cabecalho__menuicon"]}></MenuIcon>
  
                <nav className={classNames({
                        [styles["nav--aparecer"]]: aparecer === true ? true : false,
                        [styles["nav"]]: true
                    })}>
                        <div className={styles.mydiv}>asdad</div>
                        <ul className={styles.lista}>
                    {menu.map(item => {
                        return(
                            <li>{item.titulo}</li>
                        )
                    })}</ul>
                </nav>
            </header>
            <div onClick={() => setAparecer(false)} className={classNames({
                        [styles["div--aparecer"]]: aparecer === true ? true : false,
                        [styles["div"]]: true
            })}></div>
        </>
    )
    
}