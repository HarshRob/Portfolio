import React from 'react';
import emailjs from 'emailjs-com';
import { Form, FormGroup, Input, Label, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_33ihsvo", 'template_ie5f9td', e.target, 'user_nm55lqw8gYykrTCIAYt0V')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent");
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
      });

    document.getElementById('username').value = "";
    document.getElementById('useremail').value = "";
    document.getElementById('message').value = "";

    

  }

  return (
   
        <>
          <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="flex-center text">Contact</h2>
                        <p className="flex-center text">
                          Feel free to reach out through the form or the links below.
                        </p>
                    </div>
                </div>
            </div>
            
          
          <Form className="contact-form" onSubmit={sendEmail}>
              <FormGroup>
                <Label>Name</Label>
                <Input required id="username" type="text" name="username" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input required id="useremail" type="email" name="useremail" />
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <Input required id="message" type="textarea" name="message" rows="6" />
              </FormGroup>
              <Button outline color="info"  size="lg" type="submit">Send</Button>
          </Form>
          
              <div className="flex-center m-4 ">
                <a className="btn btn-social-icon btn-github p-4" href="https://github.com/HarshRob/" target="_blank" rel="noreferrer noopener"><i className=" p-2 fa fa-github " /></a>{' '}
                <a className="btn btn-social-icon btn-facebook p-4" href="https://www.facebook.com/robbie.harshman/" target="_blank" rel="noreferrer noopener"><i className="p-2 fa fa-facebook" /></a>{' '}
                <a className="btn btn-social-icon btn-linkedin p-4" href="https://www.linkedin.com/in/robbie-harshman-15a663b3/" target="_blank" rel="noreferrer noopener"><i className="p-2 fa fa-linkedin" /></a>{' '}
              </div>

        </>
   
  );
}
