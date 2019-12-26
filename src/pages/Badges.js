import React from "react";

import "./styles/Badges.css";

import confLogo from "../images/badge-header.svg";
import api from "../api";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  constructor(props) {
    super(props);
    console.log("1, constructor");
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5, quinto");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6, desmontado");

    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.loading == true) {
      return "loading..";
    }

    if (this.state.error) {
      return `ERROR: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Bagde
            </Link>
          </div>

          <div className="Badges__list">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
