'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';

class Lesson2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ styles.container }>
              <LessonTitle text='alert something while clicking below button' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/docs/events.html' text='Read events' />
              </LessonHelper>
              <button>
                Punch me, bitch!
              </button>
            </div>
            );
    }
}

var styles = {container: {}};

module.exports = Lesson2;
