import React from "react";
import Link from "next/link";
import styles from "./Home.styles";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
        <h2>WelCome To My Website</h2>
        <Link href="/projects" prefetch>
          <button type="button">Next Page</button>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Home;
