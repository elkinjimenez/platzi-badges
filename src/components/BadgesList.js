import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="card my-3 p-3" key={badge.id}>
              <div className="row">
                <div className="col-2">
                  <img
                    className="rounded-circle img-fluid"
                    src={badge.avatarUrl}
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
