import styles from '../../styles/components/Home/History.module.scss';
import { Card } from '../Card';
import FadeComponent from '../FadeComponent';

export function History(){
    return(
        <article className={styles.histContainer}>
            <div className={styles.histBox}>
                <h1>Nossa história</h1>

                <p>
                    Em 1969, Dina Jardim abriu uma escola de Educação Infantil que levava o seu nome. Com o tempo e uma 
                    mudança de endereço veio também um novo nome, Bem Me Quer. Dez anos após a fundação a então proprietária 
                    vendeu a escola surgindo o Externato Zilda Ruiz, na Rua XII de Outubro, passando a oferecer o Ensino Fundamental I.
                    <br/><br/>
                    Dona Neuza Mello, que por 30 anos lecionou como professora do Magistério Público do Estado de São Paulo, se aposentou 
                    em 1981, ano no qual ela e seu esposo adquiriram o Externato. A partir de então a família Braga Mello passou a comandar 
                    a escola e implantou o Ensino Fundamental II. Com o aumento de alunos veio a necessidade de ampliar o espaço. Para 
                    atender a futura demanda a família construiu um novo prédio. Em 1987, a escola mudou-se para as novas instalações na 
                    Rua Coronel Albino, no Parque São Judas Tadeu. Com a mudança de endereço veio também a troca do nome, nascendo o 
                    Colégio Braga Mello. Em 1991 teve início a primeira turma do Ensino Médio. Em 2019, o Colégio Braga Mello formou a 34ª 
                    turma do Ensino Fundamental e a 28º turma do Ensino Médio . A data de aniversário, 05 de abril, foi escolhida pela família 
                    por ser o dia de aniversário de seu patriarca, Alberto Luiz Braga Mello.
                </p>
            </div>

            <div className={styles.cardBox}>
                <Card />
            </div>
            
        </article>
    );
}