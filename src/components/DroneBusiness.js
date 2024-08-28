import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'animate.css';
// import house1 from '../assets/img/example1.jpg';
// import house12 from '../assets/img/example2.jpg';
// import house13 from '../assets/img/example3.jpg';
// import house14 from '../assets/img/example3.jpg';
// import house15 from '../assets/img/example3.jpg';
// import house16 from '../assets/img/example3.jpg';
// import house17 from '../assets/img/example3.jpg';


export const DroneBusiness = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="drone-business" id="drone-business">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>Drone Business</h2>
            <p>Discover the amazing drone photography services we offer. Below are some examples of our work.</p>
            <h4>House Photos</h4>
            <Carousel responsive={responsive} infinite={true} className="drone-slider">
              <div><img src={house1} alt="Example 1" /></div>
              <div><img src={house12} alt="Example 2" /></div>
              <div><img src={house13} alt="Example 3" /></div>
              <div><img src={house14} alt="Example 4" /></div>
              <div><img src={house15} alt="Example 5" /></div>
              <div><img src={house16} alt="Example 6" /></div>
              <div><img src={house17} alt="Example 7" /></div>
            </Carousel>
            <Carousel responsive={responsive} infinite={true} className="drone-slider">
              <div><img src={house2} alt="Example 1" /></div>
              <div><img src={house22} alt="Example 2" /></div>
              <div><img src={house23} alt="Example 3" /></div>
              <div><img src={house24} alt="Example 4" /></div>
              <div><img src={house25} alt="Example 5" /></div>
              <div><img src={house26} alt="Example 6" /></div>
              <div><img src={house27} alt="Example 7" /></div>
            </Carousel>
            <Carousel responsive={responsive} infinite={true} className="drone-slider">
              <div><img src={house3} alt="Example 1" /></div>
              <div><img src={house32} alt="Example 2" /></div>
              <div><img src={house33} alt="Example 3" /></div>
              <div><img src={house34} alt="Example 4" /></div>
              <div><img src={house35} alt="Example 5" /></div>
              <div><img src={house36} alt="Example 6" /></div>
              <div><img src={house37} alt="Example 7" /></div>
            </Carousel>
            <h4>Plot of Land</h4>
            <Carousel responsive={responsive} infinite={true} className="drone-slider">
              <div><img src={land1} alt="Example 1" /></div>
              <div><img src={land12} alt="Example 2" /></div>
              <div><img src={land13} alt="Example 3" /></div>
              <div><img src={land14} alt="Example 4" /></div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}








// import TrackVisibility from 'react-on-screen';

// export const DroneBusiness = () => {
//   return (
//     <section className="drone-business" id="drone-business">
//       <Container>
//         <Row className="align-items-center">
//           <Col>
//             <h2>Drone Business</h2>
//             <p>Discover the amazing drone photography services we offer. Below are some examples of our work.</p>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <Row className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <Col xs={12} md={6}>
//                     <h4>Section 1</h4>
//                     <Carousel>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={} alt="First slide" />
//                         <Carousel.Caption>
//                           <h3>First Slide</h3>
//                           <p>Description of the first slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={} alt="Second slide" />
//                         <Carousel.Caption>
//                           <h3>Second Slide</h3>
//                           <p>Description of the second slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={} alt="Third slide" />
//                         <Carousel.Caption>
//                           <h3>Third Slide</h3>
//                           <p>Description of the third slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                     </Carousel>
//                   </Col>

//                   <Col xs={12} md={6}>
//                     <h4>Section 2</h4>
//                     <Carousel>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={exampleImg1} alt="First slide" />
//                         <Carousel.Caption>
//                           <h3>First Slide</h3>
//                           <p>Description of the first slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={exampleImg2} alt="Second slide" />
//                         <Carousel.Caption>
//                           <h3>Second Slide</h3>
//                           <p>Description of the second slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img className="d-block w-100" src={exampleImg3} alt="Third slide" />
//                         <Carousel.Caption>
//                           <h3>Third Slide</h3>
//                           <p>Description of the third slide.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                     </Carousel>
//                   </Col>
//                 </Row>
//               }
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }
