import React from 'react';

// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// function RenderCard({item}) {
//     return (
//         <Card>
//             <CardImg src={item.image} alt={item.name} />
//             <CardBody>
//                 <CardTitle>{item.name}</CardTitle>
//                 <CardText>{item.description}</CardText>
//             </CardBody>
//         </Card>
//     );
// }

function Home(props) {
    // const projects = props.project.map(project => {
    //     return (
    //         <div key={project.id} className="col-md m-1">
    //             <RenderCard item={props.project} />
    //         </div>
    //     );
    // })
    return (
            <>
                  <div className="flex-center">
                
                        <div className="text">
                            Hello, I'm <span className="highlight">Robbie Harshman</span>.
                            <br/>
                            Just a guy trying to code.
                        </div>
                </div>
                
            </>
    );
}

export default Home;   