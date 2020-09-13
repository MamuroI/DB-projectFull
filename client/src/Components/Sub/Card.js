import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  UncontrolledCollapse,
} from "reactstrap";
import card1 from "../Main/Assets/Bronze.jpg";
import card2 from "../Main/Assets/Silver.jpg";
import card3 from "../Main/Assets/Gold.jpg";
import card4 from "../Main/Assets/Platinum.jpg";

const ImageCard = (props) => {
  return (
    <CardDeck className="ImageCard">
      <Card>
        <CardImg top width="100%" src={card1} alt="Card image cap" className="CardImage"/>
        <CardBody>
          <CardTitle className="CardTitle">
            Bronze Package
          </CardTitle>
          <CardSubtitle>2499 THB</CardSubtitle>
          <Button
            color="primary"
            id="toggler1"
            style={{ marginBottom: "1rem" }}
          >
            Details
          </Button>
          <UncontrolledCollapse toggler="#toggler1">
            <Card>
              <CardBody>
                - Kombu Maki
                <br /> - Hotate Yaki
                <br />
                - Mosaku
                <br /> - Aodai
                <br />
                - Akami
                <br /> - Anago
                <br />
                - Fish Soup
                <br /> - Tamagoyaki
                <br />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={card2} alt="Card image cap" className="CardImage"/>
        <CardBody>
          <CardTitle className="CardTitle">Silver Package</CardTitle>
          <CardSubtitle>3499 THB</CardSubtitle>
          <Button
            color="primary"
            id="toggler2"
            style={{ marginBottom: "1rem" }}
          >
            Details
          </Button>
          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody>
                - Kombu Maki
                <br />
                - Hotate Yaki
                <br /> - Mosaku
                <br />
                - Aodai
                <br /> - Akami
                <br />
                - Anago
                <br />
                - Fish Soup
                <br /> - Tamagoyaki
                <br />
                + Aka Ebi
                <br />
                + Uni
                <br />
                + Melon
                <br />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={card3} alt="Card image cap" className="CardImage"/>
        <CardBody>
          <CardTitle className="CardTitle">Gold Package</CardTitle>
          <CardSubtitle>5499 THB</CardSubtitle>
          <Button
            color="primary"
            id="toggler3"
            style={{ marginBottom: "1rem" }}
          >
            Details
          </Button>
          <UncontrolledCollapse toggler="#toggler3">
            <Card>
              <CardBody>
                - Kombu Maki
                <br /> - Aka Ebi
                <br />
                - Hotate Yaki
                <br />
                - Mosaku
                <br /> - Aodai
                <br />
                - Akami
                <br /> - Anago
                <br />
                - Uni
                <br />
                - Fish Soup
                <br /> - Tamagoyaki
                <br />
                - Melon
                <br />
                + Chawan Mushi Foei Gras
                <br />
                + Chutoro
                <br />
                + Cheese Cake
                <br />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={card4} alt="Card image cap" className="CardImage"/>
        <CardBody>
          <CardTitle className="CardTitle">Platinum Package</CardTitle>
          <CardSubtitle>7599 THB</CardSubtitle>
          <Button
            color="primary"
            id="toggler4"
            style={{ marginBottom: "1rem" }}
          >
            Details
          </Button>
          <UncontrolledCollapse toggler="#toggler4">
            <Card>
              <CardBody>
                - Kombu Maki
                <br /> - Aka Ebi
                <br />
                - Chawan Mushi Foei Gras
                <br /> - Hotate Yaki
                <br />
                - Mosaku
                <br />
                - Aodai <br /> - Akami <br />
                - Anago
                <br />
                - Chutoro
                <br /> - Uni
                <br />
                - Tamagoyaki
                <br />
                - Fish Soup
                <br /> - Cheese Cake
                <br />
                - Melon
                <br />
                + Shima-Aji
                <br />
                + Aori Ika
                <br />
                + Negitoro Temaki
                <br />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default ImageCard;
