import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

export default class LoadDataProgress extends Component {
  constructor(props) {
    super(props);

    this.state = { texto: props.texto };
  }

  render() {
    return (
      <span>
        <div className="alert alert-info">
          <Icon size="big" name="circle notched" loading />
          {this.state.texto}
        </div>
      </span>
    );
  }
}

