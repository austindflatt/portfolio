import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/styles/Container';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { SimpleGrid, Image } from '@mantine/core';
import skills from '../components/data/skills.json';

function AboutPage() {

  return (
  <>
  <Helmet>
    <title>About Me | Austin Flatt</title>
    <meta name='description' content='About Me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <Container />
  <SectionInner>
    <br />
    <ContainerSmall>
      <h2>About Me</h2>
      <p>
      I'm a software engineer with a passion for building things. I love building and creating, whether those things are mobile apps or web apps. 
      I'm a problem solver and a creative that enjoys watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. 
      I specialize in full stack development and make it my mission to create accessible and user-friendly applications and websites. 
      {/* When I'm not coding I'm usually spending time with my girlfriend and our two dogs. We have a French Bulldog and an American Bully, their names are Brinx and Keg. */}
      </p>
      {/* <div style={{ width: '100%', height: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src="https://i.imgur.com/nCW5RIc.jpg"
        alt="Random unsplash image"
        caption="My dog begging for treats"
      />
      </div> */}
      {/* <div>
      <img src='https://i.imgur.com/P0KxMpK.jpg' width='300' style={{ marginRight: 15 }} />
      <img src='https://i.imgur.com/UrdEIcF.jpg' width='300' style={{ marginRight: 15 }} />
      <img src='https://i.imgur.com/nCW5RIc.jpg' width='300' style={{ marginRight: 15 }} />
      <img src='https://i.imgur.com/xfCCqHM.jpg' width='200' style={{ marginRight: 15 }} />
      <img src='https://i.imgur.com/4LywbJi.jpg' width='200' style={{ marginRight: 15 }} />
      </div> */}
      <br /><br />
      <h2>My Skills</h2>
      <p>I’ve learned and gained a solid understanding of these technologies.</p>
      <SimpleGrid 
      cols={4} 
      spacing="sm"
      breakpoints={[
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}
      >
        {skills.map((skill) => (
        <li key={skill._id} style={{ marginRight: '10px', marginBottom: '10px', fontSize: '.8rem', fontWeight: '300', listStyle: 'none', color: '#cbc8d0' }}>{skill.name}</li>
        ))}
      </SimpleGrid>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default AboutPage;