// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Study from "./chapter3/Study";
import Parent from "./20230515/Parent";
import Clock from "./20230515/Clock"
import CommentList from "./20230515/Commentlist";


function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/example1">Example1</Nav.Link>
            <Nav.Link href="/Clock">Clock</Nav.Link>
            <Nav.Link href="/comment">CommentList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">Home</Link>{" "}
      <Link to="/example1">Example1</Link>{" "}
      <Link to="/Babo">바보야</Link> */}
      <Routes>
        <Route path="/" element={<Study />}></Route>
        <Route path="/example1" element={<Parent />}></Route>
        <Route path="/Clock" element={<Clock />}></Route>
        <Route path="/comment" element={<CommentList />}></Route>
      </Routes>
    </div>
  )
}

export default App;
