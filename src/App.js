// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, NavigationType } from "react-router-dom";
import Study from "./chapter3/Study";
import Parent from "./20230515/Parent";
import Clock from "./20230515/Clock"
import CommentList from "./20230515/Commentlist";
import NotificationList from "./20230516/NotificationList";
import Hooks1 from "./20230516/Hooks1";
import Hooks2 from "./20230516/Hooks2";
import Hooks3 from "./20230516/Hooks3";
import UseEffect from "./20230522/UseEffect";
import UseRef from "./20230522/UseRef";
import UseMemo from "./20230522/UseMemo";
import UseCallback from "./20230522/UseCallback";
import UseContext from "./20230522/UseContext";
import Networking from "./20230522/Networking";


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
            <Nav.Link href="/notify">Notify</Nav.Link>
            <Nav.Link href="/hooks1">hooks1</Nav.Link>
            <Nav.Link href="/hooks2">hooks2</Nav.Link>
            <Nav.Link href="/hooks3">hooks3</Nav.Link>
            <Nav.Link href="/UseEffect">UseEffect</Nav.Link>
            <Nav.Link href="/UseRef">UseRef</Nav.Link>
            <Nav.Link href="/UseMemo">UseMemo</Nav.Link>
            <Nav.Link href="/UseCallback">UseCallback</Nav.Link>
            <Nav.Link href="/UseContext">UseContext</Nav.Link>
            <Nav.Link href="/Networking">Networking</Nav.Link>
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
        <Route path="/notify" element={<NotificationList />}></Route>
        <Route path="/hooks1" element={<Hooks1 />}></Route>
        <Route path="/hooks2" element={<Hooks2 />}></Route>
        <Route path="/hooks3" element={<Hooks3 />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="/UseRef" element={<UseRef />}></Route>
        <Route path="/UseMemo" element={<UseMemo />}></Route>
        <Route path="/UseCallback" element={<UseCallback />}></Route>
        <Route path="/UseContext" element={<UseContext />}></Route>
        <Route path="/Networking" element={<Networking />}></Route>
      </Routes>
    </div>
  )
}

export default App;
