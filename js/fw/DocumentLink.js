'use strict';

import React from 'react';

class DocumentLink extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.link !== nextProps.link || this.props.text !== nextProps.text;
    }

    render() {
        return (
            <p>
              <a href={ this.props.link } target='_blank'>
                { this.props.text }
              </a>
            </p>
            );
    }
}

DocumentLink.propTypes = {
    link: React.PropTypes.string,
    text: React.PropTypes.string
};

module.exports = DocumentLink;
