'use strict';

import React from 'react';
import Dashboard from './Dashboard';
import Lesson1 from '../lessons/lesson1/index';
import Lesson2 from '../lessons/lesson2/index';
import Lesson3 from '../lessons/lesson3/index';
import Lesson4 from '../lessons/lesson4/index';
import Lesson5 from '../lessons/lesson5/index';
import { Router, Route } from 'react-router';

class MainController extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
              <Route path='/' component={ Dashboard }>
                <Route path="lesson1" component={ Lesson1 } />
                <Route path="lesson2" component={ Lesson2 } />
                <Route path="lesson3" component={ Lesson3 } />
                <Route path="lesson4" component={ Lesson4 } />
                <Route path="lesson5" component={ Lesson5 } />
              </Route>
            </Router>
            );
    }
}

module.exports = MainController;
