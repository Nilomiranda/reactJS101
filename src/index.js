import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
    render () {
        return <a href="">Click me bitch!</a>
    }
}

class App extends Component {
    render () {
        return (
            /**
             * Fragment component act as a <div></div>
             * but with no browser default styling
             */
            <Fragment>
                <h1>Hello ReactJS</h1>
                <Button />
            </Fragment>
        )
    }
}

render(<App />, document.getElementById('app'))