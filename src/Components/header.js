import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Placeholder } from 'react-bootstrap'; wanted to try a placeholder, too much for little time
export default function Header() {

		return (
            <>
            
            <Card className="text-center" border="warning"style={{ width: '100rem' }}>
      <Card.Header>Promineo Tech 2023</Card.Header>
      <Card.Body>
        <Card.Title>WEEK 16-18 FINAL</Card.Title>
        <Card.Text>
        I used an mockAPI, with 3 links, Home, About, and Finance for my final.
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Did a card for the header, along with title and a body */}
            {/* <div className="card mb-3" style="width: 18rem;">
                <div className="card-body">
                <h2 className="card-title">WEEK 16-18 FINAL</h2>
                <h2>WEEK 16-18 FINAL</h2>
                <p className="card-text">I used an mockAPI, with 3 links, Home, About, and Finance for my final.</p>
                </div>
            </div> */}
            </>
           
      

        )
}