import React, { Component } from "react";

export class ProductItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div>
          <span class=" badge rounded-pill bg-danger" >
            {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>

            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
          </div>
          <a href={newsUrl} target="-blank" className="btn btn-sm btn-primary">
            Get more details
          </a>
        </div>
      </div>
    );
  }
}

export default ProductItems;
