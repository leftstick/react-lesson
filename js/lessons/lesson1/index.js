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
              <strong>center me, please</strong>
            </div>
            );
    }
}

var styles = {container: {}};

module.exports = Lesson1;
