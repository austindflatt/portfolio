import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import projects from '../ProjectsHome/projects.json';
import ProjectModal from '../../ProjectModal/ProjectModal'
import styled from 'styled-components';
import { TextInput, TextInputProps, ActionIcon } from '@mantine/core';
import { Tooltip } from '@mantine/core';

export const ProjectHome = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 20px;
    width: 100%;

    @media (max-width:639px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 60px 20px;
        width: 100%;
    }
`;

export const ProjectHomeCard = styled.div`
    @media (min-width:641px) {
        opacity: 1;
        border-radius: 6px;
        padding: 15px;
        transition: all 0.5s ease 0s;
    }
`;

export const ProjectBox = styled.div`
    @media (min-width:641px) {
        border-radius: 6px;
        padding: 15px;
        transition: all 0.5s ease 0s;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    opacity: 1;
	border-radius: 4px;

    @media (min-width:641px) {
        &:hover {
            opacity: 0.7;
            transition: 0.2s;
        }
    }
`;

export const ProjectHomeLinks = styled.div`
    display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding-top: 10px;
`;

export const ProjectWrapper = styled.div`

`;

export const ProjectTitle = styled.span`
    font-size: 16px;
	transition: all 0.2s ease 0s;

`;

export const SectionInner = styled.div`
    position: relative;
    padding-top: 88px;
    padding-bottom: 88px;
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;


function ProjectsCollection() {
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        return projects.filter((project) => (
            project.description.toLowerCase().includes(search)
        ))
      }
    
    return (
        <>
        <Helmet>
            <title>All Projects | Austin Flatt</title>
            <meta name='description' content='Archive of all my projects.' />
            <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
        </Helmet>
        <Container>
            <SectionInner>
            <br />
            <h2>My Projects</h2>
            <TextInput
            size="md"
            placeholder="Search for projects (Crypto App, GitHub Profile Finder, etc.)"
            value={null}
            onChange={(e) => setSearch(e.target.value)}
            rightSectionWidth={42}
            style={{ marginBottom: '20px', padding: '15px' }}
            />
            <ProjectHome>
                {handleSearch()
                .slice(0, 12).map((project) => (
                <ProjectHomeCard key={project.id}>
                    <a href={project.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <ProjectImage src={project.imageUrl} loading="lazy" alt={project.name} />
                    </a>
                    <ProjectHomeLinks>
                        <ProjectWrapper>
                            <Tooltip position="bottom" placement="center" gutter={10} label='View Code'>
                                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="project-ext" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#262626">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </a>
                                </Tooltip>
                                {project.showViewLive ? 
                                <Tooltip position="bottom" placement="center" gutter={10} label='View Live'>
                                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="project-ext" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#262626">
                                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                    </svg>
                                </a>
                            </Tooltip>
                            : null}
                        </ProjectWrapper>
                        <ProjectTitle>{project.name}</ProjectTitle>
                    </ProjectHomeLinks>
                </ProjectHomeCard>
                ))}
            </ProjectHome>
            </SectionInner>
        </Container>
        </>
    )
}

export default ProjectsCollection;