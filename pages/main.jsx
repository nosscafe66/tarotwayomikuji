import { AuthButton } from "@/components/AuthButton/authbutton";
import CardDeck from "@/components/CardDeck/carddeck";
import ShufflePage from "@/components/Shuffle/shuffle";
import React, { useState } from "react";
import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <ShufflePage />
      <div>
        <label htmlFor="鑑定内容記録">鑑定内容記録</label><br />
        <button>
          <Link href="/recordtarotresult" >
            鑑定内容記録
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainPage;