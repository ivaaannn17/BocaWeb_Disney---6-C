import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';

export default function Descrição({dados}) {
    return (
        <div>
            <Head>
                <title> Disney - Descrições </title>
            </Head>
            <Navbar />
            <div>
            {dados.map((personagem) => (
                <div className={styles.descricao} key={personagem.id}>
                    <h1>{personagem.nome}</h1>
                    <h2>{personagem.usuario}</h2>
                    <p>{personagem.descricao}</p>
                </div>
            ))}
            </div>
            <Footer />
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const dados = await repo;
    return {
        props: { dados }
    }
})