import React from "react";

import ImageHero from "assets/images/banner.png";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import { Fade } from "react-reveal";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 50,
      behavior: "smooth",
    });
  }

  const numberFormat = (number) => {
    const convert = new Intl.NumberFormat("id-ID");
    return convert.format(number);
  };

  return (
    <Fade>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 560 }}>
            <h1 className=" font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width={36} height={36} src={IconTraveler} alt="" />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>{" "}
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width={36} height={36} src={IconTreasure} alt="" />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>{" "}
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width={36} height={36} src={IconCities} alt="" />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>{" "}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <img
              src={ImageHero}
              className=" img-fluid"
              width="520"
              height="410"
              alt=""
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
