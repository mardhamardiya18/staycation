import React from "react";
import parse from "html-react-parser";

const PageDetailDescription = ({ data }) => {
  return (
    <main>
      <h4>About the place</h4>
      {parse(data.description)}

      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              className="col-3"
              key={`feature-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                className="d-block mb-2"
                width="38"
              />
              <span>{feature.qty} </span>
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default PageDetailDescription;
