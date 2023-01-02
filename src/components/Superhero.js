import { Container, Row, Col, Card, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="bg-dark movieImage">
              <Image src={antmanImage} alt="antman Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ANT-MAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={avengerImage} alt="avenger Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">AVENGERS END GAME</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={batmanImage} alt="batman Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">BATMAN THE DARK KNIGHT</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={robinhoodImage} alt="robinhood Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={spidermanImage} alt="spiderman Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={supermanImage} alt="superman Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SUPERMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
