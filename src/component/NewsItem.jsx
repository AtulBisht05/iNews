import React from "react";
import noImg from "/src/assets/no-image.svg";

const NewsItem = (props) => {
  let { title, imgUrl, newsUrl, author, source, date } = props;

  return (
    <div className="card my-3 bg-primary-subtle border border-primary-subtle rounded-3" >
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        {source}
      </span>

      <img
        src={imgUrl ? imgUrl : noImg}
        style={{ height: "200px", width: "400px" }}
        className="card-img-top img-thumbnail"
        alt="no image available"
      />
      <h6 className="card-title p-1">{title}</h6>
      <div className="card-body">
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
          Read More
        </a>
        <p className="card-text my-2">
          <small className="text-body-primary">
            Author: &nbsp; <strong>{!author ? " unknown" : author}</strong>
          </small>
        </p><p className="card-text my-2">
          <small className="text-body-primary">
            {new Date(date).toUTCString()}
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewsItem