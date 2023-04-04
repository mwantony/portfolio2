import { ReactComponent as MenuIcon } from "../../assets/svg/menu-icon.svg";
import styles from "./Cabecalho.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import efeito1 from "assets/img/efeito1.png";
import efeito2 from "assets/img/efeito2.png";
interface Props {
  aparecer: boolean;
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>;
  selecionado: number;
  setSelecionado: React.Dispatch<React.SetStateAction<number>>;
}
export function Cabecalho({
  aparecer,
  setAparecer,
  selecionado,
  setSelecionado,
}: Props) {
  const menu = [
    {
      titulo: "Início",
      to: "/",
    },
    {
      titulo: "Projetos",
      to: "projetos",
    },
    {
      titulo: "Sobre",
      to: "sobre",
    },
  ];

  return (
    <>
      <img src={efeito1} alt="" className={classNames({
        [styles.efeito]: true,
        [styles['efeito1']]: true
      })}/>
      <img src={efeito2} alt="" className={classNames({
        [styles.efeito]: true,
        [styles['efeito2']]: true
      })}/>
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
              return (
                <Link
                  to={item.to}
                  onClick={() => {
                    setSelecionado(index);
                    setAparecer(false);
                  }}
                >
                  <li
                    className={classNames({
                      [styles["lista__link"]]: true,
                      [styles["lista__link--selecionado"]]:
                        selecionado === index ? true : false,
                    })}
                  >
                    {item.titulo}
                  </li>
                </Link>
              );
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
            <img src={efeito1} alt="Efeito1" className={classNames({
        [styles['efeito']]: true,
        [styles['efeito1']]: true
      })}/>
      <img src={efeito2} alt="Efeito2" className={classNames({
        [styles['efeito']]: true,
        [styles['efeito2']]: true
      })}/>
    </>
  );
}
