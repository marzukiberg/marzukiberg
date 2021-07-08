import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { portfolio } from './_portfolio/data';

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false);
  const showImage = (event) => {
    window.open(event.target.src, '_blank');
  };

  return (
    <Container
      className="portfolio container d-flex flex-column align-items-center py-5"
      id="portfolio"
    >
      <h5 className="poppins text-center wow fadeInUp mb-3">Portfolio</h5>
      <p className="text-center wow fadeInUp mb-3" style={{ maxWidth: 540 }}>
        Project done by me <b>(click image to zoom)</b>, if you need detailed
        information about each project and my service then feel free to contact
        me.
      </p>
      <div className="d__grid ">
        {portfolio.map((item, index) => (
          <Card className="card poppins wow fadeInUp shadow">
            {/* <ModalImage
                small={`img/${item.img}`}
                large={`img/${item.img}`}
                alt={item.title}
                className="card-img lazyload"
              /> */}
            <Card.Img
              data-src={`img/${item.img}`}
              alt={item.title}
              className="lazyload"
              onClick={showImage}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: 14 }}>{item.title}</Card.Title>
              <Card.Text style={{ fontSize: 13 }}>{item.description}</Card.Text>
              {item.stacks.map((item2, index2) => (
                <Card.Link style={{ fontSize: 13 }} href="javascript:;">
                  {item2}
                </Card.Link>
              ))}
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button
          className="app_btn rounded-pill poppins px-4 wow zoomIn"
          variant="light"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </Container>
  );
}
