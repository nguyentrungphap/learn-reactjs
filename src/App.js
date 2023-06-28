import "./App.css";
import { Youtubedata } from "./Youtubedata.js";
function Component(props) {
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
}

function App(props) {
  return (
    <div className="youtube-list">
      {Youtubedata.map((item, index) => {
        let NewClass = "";
        if (index === 1) NewClass = "Test";
        return (
          <Component
            key={item.id}
            images={item.images}
            title={item.title}
            author={item.author}
            className={NewClass}
          />
        );
      })}
      {/* 
      <Component
        images="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute-dang-yeu.jpg"
        title="nodejs"
      />
      <Component
        images="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute-de-thuong.jpg"
        title="mèo js"
        author="hai"
      />
      <Component
        images="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute-meo-buon-khoc.jpg"
        author="bắp"
      />
      <Component images="https://haycafe.vn/wp-content/uploads/2022/01/hinh-dong-anh-cute.gif" />
      <Component
        images="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
        title="reactjs"
        author="pháp nguyễn"
      /> */}
    </div>
  );
}

export default App;
