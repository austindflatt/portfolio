import React from "react";
import axios from 'axios'
import { Helmet } from "react-helmet";
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import styled from 'styled-components';
import { TextInput, Textarea, Button } from '@mantine/core';
import { At, Building, User } from 'tabler-icons-react';

const Label = styled.div`
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const company = document.getElementById('company').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    axios({
      method: 'POST',
      url: 'https://austinflatt-contact-form.herokuapp.com/send',
      data: {
        name: name,
        company: company,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        window.alert('Success! ✅')
        window.location = 'contact';
      } else if (response.data.msg === 'fail') {
        window.alert('Error! Please try again')
      }
    })
  }

  return (
  <>
  <Helmet>
    <title>Contact | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        <h2>Get in touch with me</h2>
        <p>Don't hesitate to reach out if you’re in need of a developer. Whether that means you need a website, web app, want to collaborate on a project, or if you’re looking to fill a full-time position. If you have a question or just want to say hello, just fill out the form below and I will get back to you!</p>
        <form onSubmit={handleSubmit}>
          <TextInput
          placeholder="Your name"
          label="Name"
          id="name"
          size="lg"
          icon={<User size={14} />}
          required
          />
          <TextInput
          placeholder="Apple"
          label="Organization/Company"
          id="company"
          size="lg"
          icon={<Building size={14} />}
          required
          />
          <TextInput
          placeholder="Your email"
          label="Email"
          id="email"
          size="lg"
          icon={<At size={14} />}
          required
          />
          <Textarea
          label="Message"
          id="message"
          size="lg"
          required
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md">Send Message</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Contact;