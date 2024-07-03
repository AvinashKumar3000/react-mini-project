import { Component, useContext } from "react";

import './slidebar.css';
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

// some people prefer to style like this also.
const customStyle = {
    position: 'fixed',
    left: '0px',
    height: '100vh',
    width: '200px',
    backgroundColor: 'rgba(192, 192, 192, 1)',
    padding: '20px'
};


function SampleComponent({ data }) {
    const { addNotification } = useContext(NotificationContext);
    const authContext = useContext(AuthContext);

    const handleLogOut = () => {
        addNotification("logged out success fully");
        authContext.setStatus(false);
    }
    return (
        <div>
            {/* for safety purpose, I have used option chaining */}
            <img height="200px" src={data?.profile?.imgUrl} alt="profileImage" />
            <h2> {data?.username}</h2>
            <p>
                <strong>status : </strong><span>{data?.profile?.status}</span>
                <br />
                <strong>playlist count : </strong><span>{data?.playlist?.count}</span>
                <br />
                <strong>favorite count : </strong><span>{data?.playlist?.favorite.count}</span>
            </p>
            <button onClick={handleLogOut}>log-out</button>
        </div>
    );
}

// An example of class component
export default class SlideBar extends Component {
    // in class component we can't use hooks
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={customStyle} className="slide-bar">
                <button onClick={this.props.close}>close</button>
                {/* 
                    doing props drilling.
                    which means. data is coming from parent component.
                    but still. I am passing those props to child component.
                 */}
                <SampleComponent data={this.props.data} />
            </div>
        );
    }
}