
import welcome from "./Assests/welcome.jpg"
import React from 'react'
import { useHistory } from "react-router-dom";


function Welcome() {
  const history = useHistory()
  return (
    <div onClick={() => history.push("/users")} style={{ backgroundImage:`url(${welcome})`, backgroundPosition:"center", height : "100vh", width: "100vw",cursor:"pointer" }}></div>
  );
}

export default Welcome;








