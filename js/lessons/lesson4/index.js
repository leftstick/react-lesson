'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';

import TextList from '../lesson3/TextList';

class Lesson1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <LessonTitle text='fetching users from rest API and display users in below list' />
              <LessonHelper>
                <span>The API is: <code>http://demo1553843.mockable.io/users</code></span>
                <DocumentLink link='https://developers.google.com/web/updates/2015/03/introduction-to-fetch' text='Read fetch API' />
              </LessonHelper>
              <Preview>
                <TextList />
              </Preview>
            </div>
            );
    }
}

module.exports = Lesson1;
