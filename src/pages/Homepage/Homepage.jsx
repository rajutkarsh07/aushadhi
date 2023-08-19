import "./Homepage.scss";
import Typewriter from "typewriter-effect";
import { AiOutlineSearch } from "react-icons/ai";

import InputComponent from "../../components/InputComponent/InputComponent";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage_hero">
        <h2 className="homepage_head">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Aushadhi")
                .pauseFor(1000)
                .deleteAll()
                .typeString("your anti diabetic friend")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Aushadhi")
                .pauseFor(1000)
                .deleteAll()
                .typeString("your anti diabetic friend")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Aushadhi")
                .start();
            }}
          />
        </h2>

        <div className="searchbox">
          <input type="text" placeholder="find your medicine" />
          <AiOutlineSearch className="icon" />
        </div>

        <InputComponent />
      </div>
    </div>
  );
};

export default Homepage;
