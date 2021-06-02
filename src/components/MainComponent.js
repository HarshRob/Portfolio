import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from "react-tsparticles";

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
                        value: "#ffffff",
                      },
                      links: {
                        color: "#fff",
                        distance: 65,
                        enable: true,
                        opacity: 0.5,
                        
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
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 4,
                      },
                    },
                  }}
                />
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/projects' projects={Projects} />
                    <Route exact path='/about' about={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </>
        );
    }
}

export default Main;
