import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {

    return (
        <navbar className="navbar bg-primary">
            <h1>
                <i class={icon}></i>
                {title}
            </h1>
        </navbar>
    )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fa fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
