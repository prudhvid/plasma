import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function Donor() {
  return(
    <Container>
      <Alert variant="success">
        <Alert.Heading>
          Your status is Actively Matching
        </Alert.Heading>
      </Alert>
    
      <Alert variant="info">
        <Alert.Heading>Patients in your area</Alert.Heading>
        {patients.map((patient) => 
          <Card>
          <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
          <Card.Subtitle> {patient.hospital} </Card.Subtitle>
          <Card.Body>
            {patient.bloodGroup} <br></br>
            Date of Request –{patient.regDate} <br></br>
            <Button variant="secondary"> See Verification Document </Button> <br></br>
            {patient.phone} <br></br>

            <Button variant="success">
              Have coordinated with patient for plasma
              </Button>
            <Button variant="danger">Report Patient</Button>
          </Card.Body>
          </Card>
        )}
      </Alert>
      
  
      <Button variant="info">
        Show Other Patients near me
      </Button>

      <Button variant="danger">
        I no longer interested to donate plasma
      </Button>
      <Button variant="success">
        I have already donated plasma
      </Button>
      
    </Container>
  )
}

const patients = [
  {
    firstName: "Atal",
    lastName: "Agrawal",
    phone: "99287291",
    hospital: "Ramrajan Hospital",
    bloodGroup: "A+",
    regDate: "20th Dec, 2021"
  },
  {
    firstName: "Naman",
    lastName: "Mirtuka",
    phone: "992872912",
    hospital: "Berrys Hospital",
    bloodGroup: "B+",
    regDate: "25th Dec, 2021"
  }
];
export default Donor;