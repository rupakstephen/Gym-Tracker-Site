import React, {useState} from 'react';
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
import Modal from 'react-bootstrap/Modal'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'



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
   constructor(props) {
     super(props)
     this.state = {
       showLogIn: false,
       showSignUp: false
     };
   }


  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">GymTracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button onClick={() => this.setState({showLogin:true})} variant="outline-info">Log In</Button>
        <Button onClick={() => this.setState({showSignUp:true})}>Sign Up</Button>
      </Navbar>



      <Modal show={this.state.showLogin} onHide={() => this.setState({showLogin:false})}>
       <Modal.Header closeButton>
         <Modal.Title>Log In</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup>
        <FormControl
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
        </InputGroup>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={() => this.setState({showLogin:false})}>
           Close
         </Button>
         <Button variant="primary" onClick={() => this.setState({showLogin:false})}>
           Log In
         </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={this.state.showSignUp} onHide={() => this.setState({showSignUp:false})}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
         <InputGroup.Prepend>
           <InputGroup.Text>First and last name</InputGroup.Text>
         </InputGroup.Prepend>
         <FormControl />
         <FormControl />
       </InputGroup>

       <InputGroup className="mb-3">
         <FormControl
           placeholder="E-Mail"
           aria-label="E-Mail"
           aria-describedby="basic-addon1"
         />
       </InputGroup>

       <InputGroup className="mb-3">
         <FormControl
           placeholder="Username"
           aria-label="Username"
           aria-describedby="basic-addon1"
         />
       </InputGroup>

       <InputGroup>
       <FormControl
         placeholder="Password"
         aria-label="Password"
         aria-describedby="basic-addon1"
       />
       </InputGroup>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => this.setState({showSignUp:false})}>
          Close
        </Button>
        <Button variant="primary" onClick={() => this.setState({showSignUp:false})}>
          Sign Up!
        </Button>
      </Modal.Footer>
    </Modal>


</>
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
