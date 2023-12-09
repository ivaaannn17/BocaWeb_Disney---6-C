import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
import Link from 'next/link';

export default function disney({ dados }) {
    return (
        <div>
            <Head>
                <title> Disney - Personagens </title>
            </Head>
            <Navbar />
            <div className={styles.disney}>
                <h1> Personagens</h1>
                {dados.map((personagem,index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <ul>
                            <li key={personagem.id}>{personagem.nome}</li>
                        </ul>
                </Link>
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

