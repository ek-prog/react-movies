import React, {Component} from "react";

class  Header extends Component {

    render() {
        return (
            <nav  className="cyan darken-1">
                <div className="nav-wrapper">
                    <div>React Movies</div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><div href="#">Repo</div></li>
                    </ul>
                </div>
            </nav>
        );
    }
};
export default Header;