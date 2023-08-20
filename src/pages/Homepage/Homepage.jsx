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
                .typeString("Welcome")
                .pauseFor(1000)
                .deleteAll()
                .typeString("To your personal drug recommending assitant")
                .pauseFor(1000)
                .start();
            }}
          />
        </h2>

        <div className="searchbox">
          <input type="text" placeholder="find your medicine" />
          <AiOutlineSearch className="icon" />
        </div>

        <a href="#inputComp" className="btn">
          Scroll Down to get personalised report
        </a>
      </div>
      <div id="inputComp">
        <InputComponent />
      </div>
    </div>
  );
};

export default Homepage;
