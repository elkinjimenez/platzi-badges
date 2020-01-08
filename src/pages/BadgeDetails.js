import React from 'react';
import ReactDOM from 'react-dom';

import './styles/BadgeDetails.css';
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from '../api';
import { Link } from 'react-router-dom';

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, data: data })

        } catch (error) {

            this.setState({ loading: false, error: error })

        }
    }



    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="img-fluid" src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstname={this.state.data.firstName} lastname={this.state.data.lastName} email={this.state.data.email} twitter={this.state.data.twitter} jobTitle={this.state.data.jobTitle} />
                        </div>
                        <div className="col">
                            <h2>Acciones</h2>
                            <div>
                                <Link className="btn btn-primary" to={`/badges/${this.state.data.id}/edit`}>Editar</Link>
                                <button className="mx-3 btn btn-danger">Eliminar</button>
                                {ReactDOM.createPortal(<h1>Hola</h1>, document.getElementById('modal'))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeDetails;