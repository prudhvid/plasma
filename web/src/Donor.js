import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function IsActive() {
  return donorInfo.status === "Active";
}

function Donor() {
  const pincode = "";
  const patients = donorInfo.patients;
  return(
    <Container>
      <Alert variant={IsActive() ? "success": "dark"}>
        <Alert.Heading>
          Your status is {donorInfo.status}
        </Alert.Heading>
      </Alert>

      {IsActive() ?
        <Alert variant="info">
          <Alert.Heading>
            Search Patients by Pincode:  <input value={pincode} 
            placeholder={"532986"} />
            <Button variant="outline-dark"> Search </Button>
          </Alert.Heading>
          {patients.map((patient) => 
            <Card>
            <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
            <Card.Subtitle> {patient.hospital} </Card.Subtitle>
            <Card.Body>
              Blood Group {patient.bloodGroup} <br/>
              Date of Request –{patient.regDate} <br/>
              <Button variant="secondary"> See Verification Document </Button>
              <br/>
              {patient.phone} <br/>

              <Button variant="success">
                Have coordinated with patient for plasma
                </Button>
              <Button variant="danger">Report Patient</Button>
            </Card.Body>
            </Card>
          )}
        </Alert> :
        <Alert variant="warning">
          <Alert.Heading>
            You are in-eligibile to donate plasmate as of now. 
            Current wait time is {donorInfo.waitTime}
          </Alert.Heading>
        </Alert>
      }

      {IsActive() &&
        <Button variant="info">
          Show Other Patients near me
        </Button>
      }

      <Button variant="danger">
        I no longer interested to donate plasma here
      </Button>
      {IsActive() &&
      <Button variant="success">
        I have already donated plasma
      </Button>}
      
    </Container>
  )
}

const donorInfo = {
  status: "Ineliglible",
  patients: [
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
  ],
  waitTime: "2 days"
};
export default Donor;