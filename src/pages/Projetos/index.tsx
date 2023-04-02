import { url } from "inspector";
import { useEffect } from "react";
import projetos from "../../db.json";
import styles from "./Projetos.module.scss";
export default function Projetos() {
  const elementosAleatorios: Array<any> = [];
  while (elementosAleatorios.length < 3) {
    const indiceAleatorio = Math.floor(Math.random() * projetos.length);
    const elementoAleatorio = projetos[indiceAleatorio];
    if (!elementosAleatorios.includes(elementoAleatorio)) {
      elementosAleatorios.push(elementoAleatorio);
    }
  }
  console.log(elementosAleatorios);
  return (
    <>
      {elementosAleatorios.map((item) => {
        return (
          <ul className={styles.lista}>
            <a href={item.link} target='_blank' rel='noreferrer'>
                <li className={styles['lista__item']}>
                    <div className={styles['lista__foto']} style={{backgroundImage: 'url(' + item.imagem + ')'}}><img src={item.imagem} alt="Imagem do projeto" className={styles['lista__imagem']}/></div>
                    <legend className={styles['lista__divisao']}>
                        <h2>{item.titulo}</h2>
                        <p>{item.label}</p>
                    </legend>
                </li>
            </a>
          </ul>
        );
      })}
      <a href="https://github.com/mwantony?tab=repositories" target='_blank' rel='noreferrer'><button className={styles['projetos__botao']}>Ver todos</button></a>
    </>
  );
}
