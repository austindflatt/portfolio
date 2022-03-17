import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeaderNav from './components/Header/Header';
import Main from './components/Main/Main';
import ProjectsCollection from './components/Pages/ProjectsCollection/ProjectsCollection';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import Uses from './components/Pages/Uses/Uses';
import Contact from './components/Pages/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/Pages/404/404';
import GlobalStyle from './components/styles/GlobalStyle';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Helmet>
          <title>Austin Flatt | Software Engineer</title>
          <meta name='title' content='Austin Flatt - Software Engineer.' />
          <meta name='description' content='Personal portfolio of Austin Flatt, Software Engineer based in Louisville, Kentucky.' />
          <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, mern, react, html, css, javascript, programmer, coder' />
          <meta property="og:title" content='Austin Flatt - Software Engineer.' />
          <meta property="og:description" content='Personal portfolio website of Austin Flatt, Software Engineer based in Louisville, Kentucky.' />
          <meta property="og:image" content='%PUBLIC_URL%/portfolioimage.png' />
        </Helmet>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/projects' component={ProjectsCollection} />
          <Route path='/uses' component={Uses} />
          <Route path='/contact' component={Contact} />
          <Route path='/404' component={PageNotFound} />
          <Route path='/*' component={PageNotFound} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;