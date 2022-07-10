import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import firebaseConfig from "../../firebase.js";
import PSLogo from "../Assests/PSLogo.jpeg";

export default function Navbar() {
  const currDate = new Date().toLocaleTimeString();

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Nav className="Navs">
        <nav>
          <ul>
            <li style={{paddingLeft:"80px" }}>Games</li>
            <li>Media</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li style={{paddingLeft:"600px" }}>
              <SearchIcon />
            </li>
            <li>
              <SettingsIcon />
            </li>
            <li>
              <img
                onClick={() => firebaseConfig.auth().signOut()}
                src={PSLogo}
                alt=""
              />
            </li>
          </ul>
        </nav>
        <nav>
          <p>{currDate}</p>
        </nav>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  /* margin-top: 30px; */
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  color: white;

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    object-fit: cover;
  }
`;
