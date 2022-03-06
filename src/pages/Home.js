import { Tabs, Tab } from "react-bootstrap";
import Answered from "../componenet/Answered";
import NonAnswered from "../componenet/NonAnswered";
import NavBar from "../componenet/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';



function Home() {
  const navigate = useNavigate();
  const activeUser = Object.values(useSelector((state) => state.activeUser));
  console.log(activeUser,"activeUser");
  useEffect(() => {
    if ( activeUser.length === 0 ){
      navigate("/LogginPage");
    }
  }, [])
  
  return (
    <div>
      <NavBar />
      <Tabs
        defaultActiveKey="Answered"
        id="uncontrolled-tab-example"
        className="mb-3"
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
