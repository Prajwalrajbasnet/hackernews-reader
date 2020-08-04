import React from 'react';

function withHyperLink(Component) {
  class ComponentWithHyperLink extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        link: this.props.link,
        hover: false,
      };
    }

    onMouseEnter = () => {
      this.setState({
        hover: true,
      });
    };
    onMouseLeave = () => {
      this.setState({
        hover: false,
      });
    };
    render() {
      return (
        <a
          href={this.state.link}
          target="_blank"
          rel="noopener noreferrer"
          title={this.props.title}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{ ...linkStyle, ...(this.state.hover ? linkHover : null) }}
        >
          <Component {...this.props} />
        </a>
      );
    }
  }
  return ComponentWithHyperLink;
}
const linkStyle = {
  color: '#95a5a6',
  textDecoration: 'none',
};
const linkHover = {
  textDecoration: 'underline',
};
export default withHyperLink;
