import React from 'react';
import Typed from 'react-typed';

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
            
                  <div id="hometext" className="flex-center">

                
                        <div className="text">
                            Hello, I'm <span className="highlight">Robbie Harshman</span>.
                            <br/>
                            I'm just a guy trying <Typed strings={[
                              'to code.',
                              'to learn.',
                              'to be better.']}
                              typeSpeed={150}
                              backSpeed={50}
                              loop 
                              onStart = {self => self.cursor.remove()}>
                              <span />
                            </Typed>
                        </div>
                </div>
            
    );
}

export default Home;   