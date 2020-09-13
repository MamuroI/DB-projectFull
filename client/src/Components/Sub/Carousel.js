import React, { Component } from "react";
import Carousel from "bootstrap";
import pic1 from "../Main/Assets/yacht2.jpg";
import pic2 from "../Main/Assets/sushi.jpg";
import pic3 from "../Main/Assets/omakaseTable2.jpg";

export default class ImageSlide extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pic1} class="d-block w-100" alt="yacht"></img>
            </div>
            <div class="carousel-item">
              <img src={pic2} class="d-block w-100" alt="sushi"></img>
            </div>
            <div class="carousel-item">
              <img src={pic3} class="d-block w-100" alt="cheftable"></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
