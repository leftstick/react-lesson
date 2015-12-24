'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';

class Lesson2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <LessonTitle text='alert something while clicking below button' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/docs/events.html' text='Read events' />
              </LessonHelper>
              <Preview>
                <button>
                  Punch me, bitch!
                </button>
              </Preview>
            </div>
            );
    }
}

module.exports = Lesson2;
