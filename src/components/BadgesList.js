import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";


function useSearchBadges(badges) {

  const [query, setQuery] = React.useState('');

  const [filteredBadges, setFilteredResults] = React.useState(badges)

  React.useMemo(
    () => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
      });

      setFilteredResults(result);
    }, [badges, query]);

  return { query, setQuery, filteredBadges }

}

function BadgesList(props) {

  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div className="text-center">
        <div className="form-group">
          <label>Filter badges</label>
          <input type="text" value={query} onChange={(e) => {
            setQuery(e.target.value)
          }} className="form-control" />
        </div>
        <h3>No se encontró ningún Badge</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Crea nuevo badge
          </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="form-group">
        <label>Filter badges</label>
        <input type="text" value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} className="form-control" />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li className="card my-3 p-3" key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
