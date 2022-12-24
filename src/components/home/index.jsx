import { useState } from "react";
import "./index.css";

function Home() {


    const [isLit, setLit] = useState(true);

    const clickHandler = () => {
        console.log( "I am click Handler" )
        setLit(!isLit)
    }

    return (
      <div className={`room ${(isLit) ? "lit" : "dark"}` }>
       Room is {(isLit) ? 'lit' : 'dark'}
<br />
       <button onClick={ clickHandler }>Toggle</button>

      </div>
    );
  }

  export default Home;