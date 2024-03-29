define([
    'react',
    'react-dom'
], function (React, ReactDOM) {
    'use strict';

    const e = React.createElement;

    class ReactMenu extends React.Component {
        constructor(props) {
            super(props);
            this.state = {liked: false};
        }

        render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return e(
                'button',
                {onClick: () => this.setState({liked: true})},
                'Like'
            );
        }
    }

    const domContainer = document.querySelector('#menu_container');
    ReactDOM.render(e(ReactMenu), domContainer);
});

