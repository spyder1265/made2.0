import React, {useState} from "react";
import bg  from '../../assets/img/bg.jpg';
import bg2 from '../../assets/img/bg2.png';
import bg3 from '../../assets/img/bg3.jpg';
import bg4 from '../../assets/img/bg4.jpg';
import bg5 from '../../assets/img/bg5.jpg';

const Home = () => {
  const image = [bg,bg2,bg3,bg4,bg5];
  const [wallpaper, wallChange] = useState(0);


  return(
      <>
        <div className="main">
          <img src={image[wallpaper]} className="bg" alt="bg"></img>
          <div className="flex flex-row w-screen h-screen justify-center">
            <h1 className="text fixed pl-10">Hydra</h1>
          </div>
          <header>
            <nav className="navbar">
              <ul className="logo">
                <li>LT</li>
              </ul>

              <ul className="nav-items">
                <li className="link"><a href="/Home">Home</a></li>
                <li className="link"><a href="/About">About</a></li>
                <li className="link"><a href="/Services">Services</a></li>
                <li className="link"><a href="/Work">work</a></li>
                <li className="link"><a href="/Contact">Contact</a></li>
              </ul>
            </nav>
          </header>

          <ul className="o-buttons">
            <li><div className={wallpaper === 0 ? "active round " :"round"} onClick={() => wallChange(0)} ></div></li>
            <li><div className={wallpaper === 1 ? "active round " :"round"} onClick={() => wallChange(1)}></div></li>
            <li><div className={wallpaper === 2 ? "active round " :"round"} onClick={() => wallChange(2)}></div></li>
            <li><div className={wallpaper === 3 ? "active round " :"round"} onClick={() => wallChange(3)}></div></li>
            <li><div className={wallpaper === 4 ? "active round " :"round"} onClick={() => wallChange(4)}></div></li>
          </ul>

          <footer className="footer">
            <div className="contain">
              <div className="circle">
                <div className="triangle-right"></div>
              </div>

              <div className="line">
                <h5 className="footer-txt">Striking Discovery</h5>
                <p className="footer-txt">
                  lorem ipsum dolor sit amet
                  lorem ipsum dolor sit amet
                  lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <ul className="social">
              <li><a href='/YT'>YT</a></li>
              <li><a href='/TW'>TW</a></li>
              <li><a href='/IG'>IG</a></li>
              <li><a href='/IN'>IN</a></li>
            </ul>

          </footer>

        </div>
      </>
  );
}

export default Home;