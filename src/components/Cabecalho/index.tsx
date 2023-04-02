import { ReactComponent as MenuIcon } from "../../assets/svg/menu-icon.svg";
import styles from "./Cabecalho.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
interface Props {
  aparecer: boolean
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>
  selecionado:number
  setSelecionado:  React.Dispatch<React.SetStateAction<number>>
}
export function Cabecalho({ aparecer, setAparecer, selecionado, setSelecionado }: Props) {
  const menu = [
    {
      titulo: "Início",
      to: '/'
    },
    {
      titulo: "Prjetos",
      to: 'projetos'
    },
    {
      titulo: "Sobre",
      to: 'sobre'
    },
  ];

  return (
    <>
      <header className={styles.cabecalho}>
        <MenuIcon
          onClick={() => {
            setAparecer(true);
          }}
          className={styles["cabecalho__menuicon"]}
        ></MenuIcon>

        <nav
          className={classNames({
            [styles["nav--aparecer"]]: aparecer === true ? true : false,
            [styles["nav"]]: true,
          })}
        >


          <div className={styles.mydiv}></div>
          <ul className={styles.lista}>
            {menu.map((item, index) => {
              return <Link to={item.to} onClick={() => setSelecionado(index)}><li className={classNames({
                [styles['lista__link']]: true,
                [styles['lista__link--selecionado']]: selecionado === index ? true : false,
              })}>{item.titulo}</li></Link>
            })}
          </ul>
        </nav>
      </header>
      <div
        onClick={() => setAparecer(false)}
        className={classNames({
          [styles["div--aparecer"]]: aparecer === true ? true : false,
          [styles["div"]]: true,
        })}
      ></div>
    </>
  );
}
