import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import landingPage from "json/landingPage.json";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <div>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
        <Footer />
      </div>
    );
  }
}
