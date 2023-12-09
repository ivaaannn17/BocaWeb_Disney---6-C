import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Descrição({dados}) {
    return (
        <div>
            <Head>
                <title> Disney - Descrição </title>
            </Head>
            <Navbar />
            <div>
            {dados.map((personagem) => (
                <div className='descricao' key={personagem.id}>
                    <p>{personagem.nome}</p>
                    <p>{personagem.usuario}</p>
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