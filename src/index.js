import React from 'react';
import ReactDOM from 'react-dom';

    const App = () => {
        return (
            <div>
                <Message />
            </div>
        );
    }
    
    const Message = (props) => {
        return (
            <div className="ui message">
                <div className="header">Changes in Service</div>
                <p>We just updated our privacy policy here to better service our customers.</p>
            </div>
        );
    }
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));







