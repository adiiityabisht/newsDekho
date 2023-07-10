import React from "react";

const NewsItems = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            zIndex: "1",
            left: "88%",
          }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary btn-dark "
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
