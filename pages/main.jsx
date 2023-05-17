import { AuthButton } from "@/components/AuthButton/authbutton";
import CardDeck from "@/components/CardDeck/carddeck";
import ShufflePage from "@/components/Shuffle/shuffle";
import React, { useState } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import ChatGPT from "@/components/ChatGPT/callchatgpt";
import Head from 'next/head'

const MainPage = () => {
  return (
    <div>
      <Head>
        <title>Tarot Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChatGPT />
      <ShufflePage />
      <div><br />
        <button className={styles.button}>
          <Link href="/recordtarotresult" >
            鑑定内容記録
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainPage;