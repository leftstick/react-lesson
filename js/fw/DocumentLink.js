'use strict';

import React from 'react';

class DocumentLink extends React.Component {

    constructor(props) {
        super(props);
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
