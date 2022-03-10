import { Tabs, Tab } from "react-bootstrap";
import Answered from "../componenet/Answered";
import NonAnswered from "../componenet/NonAnswered";
import NavBar from "../componenet/NavBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {

  return (
    <div>
      <NavBar/>
      <Tabs
        defaultActiveKey="Answered"
        id="uncontrolled-tab-example"
        className="mb-4 justify-content-center "
      >
        <Tab eventKey="Answered" title="Answered Questions">
          <Answered />
        </Tab>
        <Tab eventKey="NonAnswered" title="Non Answered Questions">
          <NonAnswered />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Home;
