import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <>
    
      <Head>
        <title>Tracktor</title>
      </Head>
     <Header/>
    
      <main>{children}</main>
      <Footer/>
      
    </>
  );
}
