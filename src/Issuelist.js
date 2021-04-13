import moment from "moment";
import React, { useEffect, useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Issuelist = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="Issuelist">
      <div className="Listitem">
        {data.map((item) => (
          <div className="Item" key={item.id}>
            <div className="Item-heading">
              <div className="heading">
                <h1>{item.title}</h1>
              </div>
              <div className="issue-list">
                {item.labels.map((element) => (
                  <p key={Math.random} className="issue">
                    {element.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="item-details">
              <span className="details">
                {`Status:${item.state}, Created ${moment(
                  item.created_at
                ).fromNow()} By- ${item.user.login}`}
              </span>

              <span className="icons">
                <FontAwesomeIcon className="comment" icon={faComment} />
                <span class="badge badge-light">{item.comments}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issuelist;
