import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button href="" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

/*
export default class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button href="" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
*/
