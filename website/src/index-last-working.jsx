import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './gym.png';
import Carousel from 'react-bootstrap/Carousel';





class Carouseltest extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
    )
  }
}



class Navbartest extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">GymTracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button variant="outline-info">Log In</Button>
        <Button>Sign Up</Button>
      </Navbar>
    )
  }
}

class Jumbotest extends React.Component {
  render() {
    return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to GymTracker</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            convallis augue vitae felis tristique sodales. Duis pellentesque libero
            eu massa pharetra, ac fermentum nulla fermentum. Nulla vel urna nulla.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum in diam vestibulum, luctus odio at,
            dignissim elit. Pellentesque id blandit velit. Morbi non lectus mauris.
          </p>
        </Container>
    </Jumbotron>
    )
  }
}



class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbartest />
        <Jumbotest />
        <Container className = "carouselcontainer" fluid>
          <Carouseltest />
        </Container>
      </Container>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  )
