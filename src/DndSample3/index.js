import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
const list = [];
for (let i = 0; i < 10; i++) {
  list.push(`Item ${i + 1}`);
}

export default class DndSample3 extends Component {
  constructor(props) {
    super(props);
    this.state.list = list;
  }
  state = {
    dragging: false,
    draggingIndex: -1
  };

  handleDragStart = (evt, index) => {
    this.setState({
      dragging: true,
      draggingIndex: index
    });
  };

  handleDrop = (evt, index) => {
    evt.preventDefault();
    const { draggingIndex } = this.state;
    let arr = this.state.list.slice();
    let removeArr = arr.splice(draggingIndex, 1);
    arr.splice(index, 0, ...removeArr);
    this.setState({
      list: arr,
      draggingIndex: -1
    });
  };
  getDraggingStyle = index => {
    const { draggingIndex } = this.state;
    if (index !== draggingIndex) return {};
    return {
      backgroundColor: "#eee"
    };
  };
  render() {
    return (
      <div className="dnd-sample">
        <ul ref="listWrap">
          {this.state.list.map((text, i) => (
            <li
              className="list-item"
              key={text}
              draggable="true"
              onDragStart={evt => this.handleDragStart(evt, i)}
              onDragOver={evt => evt.preventDefault()}
              onDrop={evt => this.handleDrop(evt, i)}
              style={this.getDraggingStyle(i)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
