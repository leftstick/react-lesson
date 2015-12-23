'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';

class Lesson1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ styles.container }>
              <LessonTitle text='Make below text in the center of the screen' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/tips/inline-styles.html' text='Read inline-styles' />
              </LessonHelper>
              <strong style={ styles.text }>center me, please</strong>
            </div>
            );
    }
}

var styles = {
    container: {},
    text: {
        width: '144px',
        height: '26px',
        padding: '3px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#BDBDBD',
        borderRadius: '3px',
        backgroundColor: '#F2F2F2',
        position: 'absolute',
        top: '50%',
        marginTop: '-13px',
        left: '50%',
        marginLeft: '-72px'
    }
};

module.exports = Lesson1;
