import React from 'react';
import emailjs from 'emailjs-com';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'



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
          <div className="contact-form">
            <h1 className="text">Contact</h1>
            <p className="text">
              Feel free to reach out through the form or the links below.
            </p>
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
                <a className="btn btn-social-icon btn-instagram p-4" href="http://instagram.com/"><i className=" p-2 fa fa-instagram " /></a>{' '}
                <a className="btn btn-social-icon btn-facebook p-4" href="http://www.facebook.com/"><i className="p-2 fa fa-facebook" /></a>{' '}
                <a className="btn btn-social-icon btn-twitter p-4" href="http://twitter.com/"><i className="p-2 fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-google p-4" href="http://youtube.com/"><i className="p-2 fa fa-youtube" /></a> 
              </div>

        </>
   
  );
}
