import Game from "./Components/Game";
import {Row, Col, Container} from "react-bootstrap";
import Weather from "./Components/Weather";
import Info from "./Components/Info";
import Music from "./Components/Music";
import "./Assets/App.css";

function App() {
  return (
      <div className="App">
          <Container id="cont">
              <Row>
                  <Col className="roww" xs="9">
                  </Col>
                  <Col className="roww" xs="3">
                      <Weather/>
                  </Col>
              </Row>
              <Row>
                  <Col id="col" className="roww" xs="3">
                      <Info/>
                  </Col>
                  <Col  className="roww" xs="6">
                     <h1>asadas</h1> <Game/>
                  </Col>
                  <Col  className="roww" xs="3">
                      <Row className="roww">
                          <Music/>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
