
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function PatientHomePage() {
  return(
    <Container>
      <Alert variant="danger">
      Info: We will turn off matching for you if you do not check in with the
      page in 24hrs, assuming you are no longer searching for plasma. Don’t
      worry, we will send you a message which you can click to reactivate
      searching
      </Alert>

      <Alert variant="success">
        <Alert.Heading>
          Your status is {patientInfo.status}
        </Alert.Heading>
        We have shown your details to {patientInfo.donorsSeen} donors who have signed up
      </Alert>
      <Alert variant="info">
        <Alert.Heading>Your Requirements</Alert.Heading>
        <Card>
          <Card.Body>
          Blood Group - {patientInfo.bloodGroup} <br></br>
          Hospital - {patientInfo.hospital} <br></br>
          Date of Request - {patientInfo.regDate}
        </Card.Body>
        </Card>
      </Alert>
      <Button variant="danger">
        I no longer require plasma
      </Button>
      <Button variant="success">
        Have coordinated with donor for plasma
      </Button>
      <Button variant="info">
        Upload Document Proof
      </Button>
    </Container>
  )
}

const patientInfo = {
  status: "Active",
  donorsSeen: 4,
  firstName: "Naman",
  lastName: "Mirtuka",
  phone: "992872912",
  hospital: "Berrys Hospital",
  bloodGroup: "B+",
  regDate: "25th Dec, 2021"
};

export default PatientHomePage;