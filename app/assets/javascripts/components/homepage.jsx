/**
 * @prop view - which authorization modal to show
 * @prop text - text to show (for demonstration purposes)
 */
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { view: this.props.view };
  }

  _toggleView = (e) => {
    var newView;

    if (this.state.view == 0) {
      newView = 1;
    } else {
      newView = 0;
    }

    this.setState({ view: newView });
  }

  render() {
    if (this.state.view == 0) {
      view = <div onClick={this._toggleView}>View 0: {this.props.text}</div>
    } else {
      view = <div onClick={this._toggleView}>View 1</div>
    }
    return view;
  }
}

HomePage.propTypes = { view: React.PropTypes.number.isRequired };
