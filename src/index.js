import React from 'react';
import ReactDOM from 'react-dom';
import MessageCard from './MessageCard';

    const App = () => {
        return (
            <div>
                <MessageCard header="Changes in Service" message="We just updated our privacy policy here to better service our customers." />
            </div>
        );
    }
    


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));







