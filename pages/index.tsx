/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
   return (
      <div className={styles.main_container}>
         <Head>
            <title>Boostcamp</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className={styles.content}>
            <div className={styles.landing_container}>1</div>
            <div className={styles.teampage_container}>2</div>
            <div className={styles.mission_container}>3</div>
            <div className={styles.instructions_container}>4</div>
         </div>
      </div>
   );
};

export default Home;
