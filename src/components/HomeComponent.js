import React from 'react';
import Typed from 'react-typed';

function Home() {
    return (  
      <div id="hometext" className="flex-center">
        <div id="home-text" className="text">
            Hello, I'm <span className="highlight">Robbie Harshman</span>.
            <br/>
            I'm just a guy trying to <Typed strings={[
              'learn.',
              'code.',
              'be better.']}
              typeSpeed={150}
              backSpeed={50}
              loop>
              <span />
            </Typed>
        </div>
      </div>  
    );
}

export default Home;   