import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const format = ({children}:any) => {
    return ( 
<>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
     );
}
 
export default format;