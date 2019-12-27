import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="text-center">
          <h3>No se encontró ningún Badge</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Crea nuevo badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="card my-3 p-3" key={badge.id}>
              <div className="row">
                <div className="col-2">
                  <Gravatar
                    className="rounded-circle img-fluid"
                    email={badge.email}
                    alt="Avatar de usuario"
                  />
                </div>
                <div className="col-10">
                  <p className="my-0">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="my-0">@{badge.twitter}</p>
                  <p className="my-0">{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
