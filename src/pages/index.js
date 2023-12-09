import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title> BocaWeb - Disney </title>
      </Head>
      <Navbar />
      <div className={styles.home}>
       

        <Image src="/images/venelope.png" className='img' width={450} height={380}  />
          
          <div className='texto'> 
          
          <h2> Conheça o BocaWeb - Disney's Version </h2>  

          <br /> <p>  Um Objeto Digital em Audidescrição (ODA) consiste em uma imagem estática, <br />
          textos descritivos da imagem e arquivos de áudio com a descrição da imagem.<br /> 
          Esses três elementos conectados representam um ODA. </p>

          <br /> <p> O BocaWeb - Disney's Version é um portal que possibilita consultas gratuitas <br /> 
          a um banco de dados de ODAs, com descrições dos personagens animados <br /> 
          da disney: princesas, vilões, heróis e mocinhos. </p>
         
  
          </div>
              
        
      </div>
      <Footer />
    </div>
  )
}