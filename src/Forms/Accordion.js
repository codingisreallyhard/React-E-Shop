import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";
function Acc() {
  return (
    <div className="App">
      {" "}
      <h2 className="p-3 p-5 accordion">Frequently asked questions</h2>{" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Can we trust this company?</Accordion.Header>
          <Accordion.Body>
            We have been in the industry for more than 30+ years, our products
            are the finest on the market and we are ECE/EMS certified
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            My account doesn't work, what should I do?
          </Accordion.Header>
          <Accordion.Body>
            If you are having trouble with logging in, registering or any other
            technical difficulty we are sorry, please contact us at
            lorem@lorem.com, our technical staff are 24/7 here for you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            My account doesn't work, what should I do?
          </Accordion.Header>
          <Accordion.Body>
            If you are having trouble with logging in, registering or any other
            technical difficulty we are sorry, please contact us at
            lorem@lorem.com, our technical staff are 24/7 here for you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            My account doesn't work, what should I do?
          </Accordion.Header>
          <Accordion.Body>
            If you are having trouble with logging in, registering or any other
            technical difficulty we are sorry, please contact us at
            lorem@lorem.com, our technical staff are 24/7 here for you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What are the terms & conditions?</Accordion.Header>
          <Accordion.Body>
            <h3>Introduction</h3>
            <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com. These Terms will be applied fully and
              affect to your use of this Website. By using this Website, you
              agreed to accept all terms and conditions written in here. You
              must not use this Website if you disagree with any of these
              Website Standard Terms and Conditions. Minors or people below 18
              years old are not allowed to use this Website.
            </p>
            <h3>Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </p>
            <h3>Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between Company Name
              and you in relation to your use of this Website, and supersede all
              prior agreements and understandings.
            </p>
            <h3>Governing Law & Jurisdiction</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with
              the laws of the State of Country, and you submit to the
              non-exclusive jurisdiction of the state and federal courts located
              in Country for the resolution of any disputes.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Acc;
