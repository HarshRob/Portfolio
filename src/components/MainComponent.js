import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from "react-tsparticles";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';

import { PROJECTS } from '../shared/projects';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home project={this.state.projects} />
            );
        };

        return (
            <>
                <Particles
                  id="tsparticles"
                  options={{
                    particles: {
                      color: {
                        random: true,
                        value: ["fff", "#000"],
                      },
                      links: {
                        color: {
                          
                          value: "#000",
                        },
                        distance: 100,
                        enable: true,
                        opacity: 0.3,
                        
                      },
                      move: {
                        enable: true,
                        outMode: "bounce",
                        speed: 1.5,
                      },
                      number: {
                        density: {
                          enable: true,
                          value_area: 800,
                        },
                        value: 120,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 6,
                      },
                      detectRetina: true
                    },
                  }}
                />
                <Header />
                <TransitionGroup>
                    <CSSTransition  classNames="page" timeout={300}>
                      <Switch>
                          <Route path='/home' component={HomePage} />
                          <Route exact path='/projects' component={Projects} />
                          <Route exact path='/about' component={About} />
                          <Route exact path='/contact' component={Contact} />
                          <Redirect to='/home' />
                      </Switch>
                    </CSSTransition>
              </TransitionGroup>
            </>
        );
    }
}

export default Main;
