import Game from "./Components/Game";
import {Row, Col, Container} from "react-bootstrap";
import Info from "./Components/Info";
import "./Assets/App.css";
import {Route, Routes} from "react-router-dom";
import SinglePlayer from "./Components/SinglePlayer";
import MultiPlayer from "./Components/MultiPlayer";

function App() {
  return (
      <div className="App">
          <Container id="cont">
              <Row id="das">
                  <Col id="col" className="roww" xs="3">
                      <Info/>
                  </Col>
                  <Col  xs="9">

                          <Routes>
                              <Route path="/SinglePlayer" element={<SinglePlayer/>}/>
                              <Route path="/MultiPlayer"  element={<MultiPlayer/>}/>
                              <Route path="/" element={<Game/>}/>
                          </Routes>

                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
