'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';

class Lesson1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <LessonTitle text='Make below text in the center of the screen' />
              <LessonHelper>
                <span>modify style only</span>
                <DocumentLink link='http://facebook.github.io/react/tips/inline-styles.html' text='Read inline-styles' />
              </LessonHelper>
              <Preview style={ styles.container }>
                <strong style={ styles.text }>center me, please</strong>
              </Preview>
            </div>
            );
    }
}

var styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: '144px',
        height: '26px',
        padding: '3px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#BDBDBD',
        borderRadius: '3px',
        backgroundColor: '#F2F2F2'
    }
};

module.exports = Lesson1;
