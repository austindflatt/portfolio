import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/styles/Container';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { SimpleGrid, Chips, Chip } from '@mantine/core';
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
        I'm a Software Engineer with a passion for building things. I love building and creating, whether those things are web applications, or even projects at home. 
        I'm a problem solver and I just love watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. 
        I specialize in full stack development and make it my mission to create accessible and user-friendly applications and websites. 
        Other than coding, I spend my free time playing video games, and reading.
      </p>
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
        <Chips variant="filled" key={skill._id} radius="md" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Chip style={{ marginRight: '10px', marginBottom: '10px' }}>{skill.name}</Chip>
        </Chips>
        ))}
      </SimpleGrid>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default AboutPage;