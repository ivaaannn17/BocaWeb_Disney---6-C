import Image from 'next/image'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {

    return (
        <div className={styles.navbar}>

            <Image src="/images/logo.png" className={styles.logo} alt="logo" width={120} height={60} />


            <ul className={styles.lista}>
                <li>
                    <a href='/'> Home </a>
                </li>
                <li>
                    <a href='/personagem'> Personagens </a>
                </li>
                <li>
                    <a href='/descricao'> Descrição </a>
                </li>
            </ul>


        </div>

    )
}
