import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProject({project}) {
    return (
        <Card>
            <Link to={project.link}>
            <CardImg width="100%" src={project.image} alt={project.name} />
            <CardBody>
                <CardTitle>{project.name}</CardTitle>
                <CardText>{project.description}</CardText>
            </CardBody>
            </Link>
        </Card>
    )
}

export default function Projects(props) {
    const project = props.projects.map(project => {
        return (
            <RenderProject project={project} />
        );
    });
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Projects</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="flex-center text">Projects</h2>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="flex-center project-cards">
                    {project}
            </div>
        </>
    );
};
