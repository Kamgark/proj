import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="display-center navig">
                <Link to='/'><button className="button first-btn">Ruminations</button></Link>
                <Link to='/consultation'><button className="button">Consultations</button></Link>
                <Link to='/collaboration'><button className="button last-btn">Collaborations</button></Link>
            </div>
        )
    }
}
export default Header;