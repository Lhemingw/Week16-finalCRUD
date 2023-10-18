import React from 'react';
import { Card, ListGroupItem } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
export default function AboutFinance() {
//add week9 here budget stuff	
		return (
		<>

			{/* <div className ="mt-5">
			<h2 className='text-center'>About Finance Page</h2>
			<div className='divp'>
	<p className='text-center'>Hi, my finances are really good and you can check it out over in the finances page!</p> */}
	{/* </div> */}
	{/* This is bootstrap centering of the text */}
 <Card  className="text-center" border="warning"style={{ width: '100rem' }}>
	<Card.Header>About Finance Page</Card.Header>
		<Card.Body>
		<Card.Title>Hi, my finances are really good and you can check it out over in the finances page!</Card.Title>
		<Card.Title>BUDGET PERCENTS</Card.Title>
			<Card.Text>
			I use in my budget a 80/20 formula, 
   20 % to save into Roth/Emergancy save-or other savings.
			</Card.Text>
	</Card.Body>
 </Card>
	{/* <h3 className='header'>BUDGET PERCENTS</h3>
	I use in my budget a 80/20 formula, 
   20 % to save into Roth/Emergancy save-or other savings. */}

{/* <!-------HOUSING-------> */}
	<section>
	<div className='divp'>
	<h3 className='header'>HOUSING 25%</h3>
	<p className='text-center'>This one of 25% for housing is possible hard one at this time, do what you feel is needed</p>
	</div>
	{/* This is bootstrap centering of the text */}
	<ListGroup as="ul" className=" table table-bordered border-danger">
      <ListGroup.Item as="li" className="table table-bordered border-warning">
	  Rent/Morgage
      </ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Utilites(water, electricity, internet, and etc)</ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">
	  Things you buy for the house to fix or to help it look nice
      </ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Any I missed</ListGroup.Item>
    </ListGroup>
	
	</section>
	
	
{/* <!---------PERSONAL-------> */}
<section>
	<h3 className="header">PERSONAL 20%</h3>
	<div className='divp'>
<p className='text-center'>This is where you put the stuff you use for you in the bathroom, and etc</p>
</div>
{/* This is bootstrap centering of the text */}
<ListGroup as="ul"size='sm'className=" table table-bordered border-danger">
      <ListGroup.Item as="li" className="table table-bordered border-warning">
	  Make up
      </ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Face soap/other soap</ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Toothpaste/Floss</ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Women/Men stuff</ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Clothes</ListGroup.Item>
      <ListGroup.Item as="li" className="table table-bordered border-warning">Anything else I missed</ListGroup.Item>
    </ListGroup>	
	</section>


{/* <!---------FOOD----------->  */}
<section>
	<h3 className='header'>FOOD 30%</h3>
	<div className='divp'>
	<p className='text-center'>This is where you put food you eat</p>
	</div>
			{/* This is bootstrap centering of the text */}
<ListGroup as="ul"size='sm' className=" table table-bordered border-danger">
	<ListGroupItem as='li' className="table table-bordered border-warning">Green/Red Chile</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">NM drinks</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Other food</ListGroupItem>
</ListGroup>
</section>
{/* <!---------TRANSPORTATION-----> */}
<section>
	<h3 className='header'>TRANSPORTATION 10%</h3>
	<div className='divp'>
	<p className='text-center'>This is where you put the stuff you buy for your car,
	or how you get to where you need to go </p>
	</div>
	{/* This is bootstrap centering of the text */}
<ListGroup as="ul"size='sm' className=" table table-bordered border-danger">
	<ListGroupItem as='li'className="table table-bordered border-warning">Gas</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Car Loans/etc</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">What Broke</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Oil Changes</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Bus Fare/Enter here extra stuff</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning"></ListGroupItem>
</ListGroup>
</section>

{/* <!---------MEDICAL/HEALTH------> */}
<section>
	<h3 className='header'>MEDICAL/HEALTH 15%</h3>
	<div className='divp'>
	<p className='text-center'>This is where you put your RX, Dr, Running, and etc.  You can also put exercise 
	stuff in Other, if you want to seporate med you use on taxes.
You can swich this on and off with the personal if you need to, it is not usuall for me to buy personal stuff every month for example</p>
	</div>
	{/* This is bootstrap centering of the text */}
<ListGroup as="ul"size='sm' className=" table table-bordered border-danger">
	<ListGroupItem as='li'className="table table-bordered border-warning">RX</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Dr</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Health Club Fees</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Hospital</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Over the Counter</ListGroupItem>
	<ListGroupItem as='li'className="table table-bordered border-warning">Anything I Missed 1</ListGroupItem>
	<ListGroupItem as="li"className="table table-bordered border-warning">Anything I Missed</ListGroupItem>
</ListGroup>

</section>
{/* <!---------OTHER---------------> */}
<section>
		<h3 className='header'>OTHER, EXERCISE, GIFTS, & ETC HERE 5-10%</h3>	
	<div className='divp'>
	<p className='text-center'>You can put stuff you do not know where it goes in here.  Feel free to use or not, 100</p>
	</div>
	{/* This is bootstrap centering of the text */}
<ListGroup as="ul"size='sm' className=" table table-bordered border-danger">
	<ListGroupItem as='li' className="table table-bordered border-warning">Running Shoes</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Running Clothes</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Gift</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Health Club Fees</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Over the Counter</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Sewing</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Reading</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">I am sure I will pick some new hobby</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Anything I missed 1</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Anything I missed 2</ListGroupItem>
	<ListGroupItem as='li' className="table table-bordered border-warning">Anything I missed 3</ListGroupItem>
</ListGroup>
</section>
{/* <!---------OTHER2-------------> */}
<section>
	<div className='header'>
	<h3 className='text-center'>OTHER2, STUFF I MISSED 5-10%</h3>
	</div>
	<div className='divp'>
<p className='text-center'>You can put what I missed here. </p>
</div>
{/* This is bootstrap centering of the text */}
<ListGroup>
	<ListGroupItem as="li" className="table table-bordered border-warning">Miscellanous/Missed Items</ListGroupItem>
	<ListGroupItem as="li" className="table table-bordered border-warning">Miscellanous/Missed Items</ListGroupItem>
	<ListGroupItem as="li" className="table table-bordered border-warning">Miscellanous/Missed Items</ListGroupItem>
</ListGroup>
</section>
{/* <!---------LOANS--------------> */}
<section>
	<div className='header'>
	<h3 className='text-center'>LOANS</h3>	
	</div>
	<div className='divp'>
	<p className=''>You put your loans in here, besides car. Reorganize Percents as needed</p>
	</div>
	{/* This is bootstrap centering of the text */}

<ListGroup>
	<ListGroupItem as="li" className="table table-bordered border-warning">Loans1</ListGroupItem>
	<ListGroupItem as="li" className="table table-bordered border-warning">Loans 2</ListGroupItem>
	<ListGroupItem as="li" className="table table-bordered border-warning">Loans 3</ListGroupItem>
	<ListGroupItem as="li" className="table table-bordered border-warning">Loans 4</ListGroupItem>
	
</ListGroup>
</section>  
{/* </div> */}

</>
		)
}
