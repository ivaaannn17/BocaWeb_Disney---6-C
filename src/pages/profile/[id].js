import styles from '../../styles/Pages.module.css';
function Profile({ personagem = {} }) {
    return (
        <div className='descricao'>
            <p>{personagem.nome}</p>
            <p>{personagem.usuario}</p>
            <p>{personagem.descricao}</p>
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
