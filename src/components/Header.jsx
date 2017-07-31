import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="jumbotron">
                    <Link to="/"><h1>Notebook!</h1></Link>
                    <p className="lead">Organize your notes in quick and easy manner.</p>
                </div>
            </header>
        );
    }
}
export default Header