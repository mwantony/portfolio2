import {ReactComponent as MenuIcon} from "../../assets/svg/menu-icon.svg"
import MenuAparecer from 'assets/img/menu.png'
import styles from './Cabecalho.module.scss'
export function Cabecalho() {
    return (
        <>
            <header className={styles.cabecalho}>
                <MenuIcon className={styles["cabecalho__menuicon"]}></MenuIcon>

            </header>
        </>
    )
}