import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Pages.module.css';

function Profile({ personagem = {} }) {
    return (
        <div>
        <Head>
            <title> Disney - Descrições </title>
        </Head>
        <Navbar />
        <div className={styles.texto_desc}>
            <div>
                <h1>{personagem.nome}</h1>
                <h2>{personagem.usuario}</h2>
                <p>{personagem.descricao}</p>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const personagem = await repo[context.params.id];
    return {
        props: { personagem }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
    const repo = await res.json()
    const dados = await repo;
    const paths = dados.map((personagem, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;
