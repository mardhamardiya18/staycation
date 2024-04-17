import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import ItemDetails from "json/itemDetails";
import FeaturedImage from "parts/FeaturedImage";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
      </>
    );
  }
}
