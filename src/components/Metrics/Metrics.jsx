import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall'
import SectionInner from '../styles/SectionInner'

function Metrics() {

    return (
        <>
        {/* <Helmet>
            <title>Metrics | Austin Flatt</title>
            <meta name='description' content='Dashboard to track various metrics across platforms I am on like YouTube, GitHub, and more.' />
            <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
        </Helmet> */}
        <Container />
        <SectionInner>
        <br />
        <ContainerSmall>
        <h2 className="section-title">Metrics 📊</h2>
        <p>This dashboard is to track various metrics across platforms I am on like YouTube, GitHub, and more.</p>
        <br />
        <p>Portfolio Views:</p>
        <p>GitHub Commits:</p>
        <p>GitHub Stars:</p>
        <p>YouTube Subscribers:</p>
        <p>YouTube Views:</p>
        <p>Instagram Followers:</p>
        </ContainerSmall>
        </SectionInner>
        </>
    )
}

export default Metrics;