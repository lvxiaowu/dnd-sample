import React from "react";
import ReactDOM from "react-dom";

import DndSample from "./DndSample/index";
import DndSample2 from "./DndSample2/index";
import DndSample3 from "./DndSample3/index";

import Hello from "./Hello";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  DndSample,
  DndSample2,
  DndSample3
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");
    let CurrentPage = routeMap[currentPage] || Hello;

    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
