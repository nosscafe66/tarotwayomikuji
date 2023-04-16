import CardDeck from "@/components/CardDeck/carddeck";
import ShufflePage from "@/components/Shuffle/shuffle";
import React, { useState } from "react";

const HomePage = () => {    
  return (
    <div>
        <ShufflePage />
        {/* <CardDeck cards={initialCards}/> */}
    </div>
  );
};

export default HomePage;
