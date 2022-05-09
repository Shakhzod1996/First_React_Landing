import React from "react";
import "./App.css";
import Bodyskill from "./Bodyskill/Bodyskill";
import Footer from "./Footer/Footer";
import GetApp from "./GetApps/GetApp";
import GetFriends from "./GetFriends/GetFriends";
import Header from "./Header/Header";
import LearnSection from "./LearnSection/LearnSection";
import Pricing from "./Pricing/Pricing";
import Webinar from "./Webinar/Webinar";

export default function App() {
  return (
    <>
      <Header />
      <Bodyskill />
      <GetFriends />
      <LearnSection />
      <Webinar />
      <Pricing />
      <GetApp />
      <Footer />
    </>
  );
}
