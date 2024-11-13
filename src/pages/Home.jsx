import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
// Page par jo dikhta hai wo component hai.

const Home = () => {
  return (
    <div>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider!"
        }
        imageUrl={"./hero.png"}
      />
      <Biography imageUrl={"./about.png"} />
      <Departments />
      <MessageForm />
    </div>
  );
};

export default Home;
