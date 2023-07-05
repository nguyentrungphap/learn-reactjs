import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-img">
        <img
          src={props.images}
          style={{
            height: " 150px",
            display: "block",
          }}
          alt=""
        />
      </div>
      <div className="youtube-footer">
        <p className="title">{props.title || "thiếu title "}</p>
        <p className="author">{props.author || "thiếu autror"}</p>
      </div>
    </div>
  );
};

export default YoutubeItem;
