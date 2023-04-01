import {ReactComponent as MenuIcon} from "../../assets/svg/menu-icon.svg"
import {ReactComponent as DarkTheme} from '../../assets/svg/lua.svg'
import styles from './Cabecalho.module.scss'
export function Cabecalho() {
    return (
        <>
            <header className={styles.cabecalho}>
                <MenuIcon></MenuIcon>
                <DarkTheme></DarkTheme>
            </header>
        </>
    )
}