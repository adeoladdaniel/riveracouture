import React from "react";
import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import { Container } from "react-bootstrap";






function Home(){


  

    return(

        <React.Fragment>

            <Seo page="Home">
              <Navbar/>

              <div className="side_decor">
                <img width="100%" src="asset/img/ospan-ali-nyrSsBzhZ4Y-unsplash.jpg" alt="stripes"/>

              </div>

              <Container>

                <div className="section">
                <span className="header_text"> Coming Soon</span>

                <p> Riveracouture is currently Under development </p>

                {/* <button className="loader"> Load Iphone</button> */}
                </div>
              
              </Container>
            


            </Seo>
          
        </React.Fragment>
    );
}

export default Home;