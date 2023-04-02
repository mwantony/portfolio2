import { useEffect } from 'react';
import projetos from '../../db.json';
import styles from './Projetos.module.scss'
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
  return <>{elementosAleatorios.map((item) => {
    return(
        <ul>
            <li className={styles.item}>
                {item.titulo}
            </li>
        </ul>
    )
  })}</>;


}
