import { Container, Row, Col, Card, Image } from "react-bootstrap";
import jokerImage from "../assets/images/trending/joker.jpg";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark movieImage">
              <Image src={jokerImage} alt="Joker Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JOKER</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={duneImage} alt="dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DUNE</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={morbiusImage} alt="morbius Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MORBIUS</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={everythingImage} alt="everything Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">EVERYTHING EVERYWHERE</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={lightyearImage} alt="lightyear Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={infiniteImage} alt="infinite Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">INFINITE</Card.Title>
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

export default Trending;
