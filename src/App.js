import logo from './logo.svg';
import './App.css';
import Experience from './Experience.js';
import * as React from 'react';
import { Grid, Paper, Typography, Tabs, Tab, Box, Avatar, Link } from '@mui/material';

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  const work_experiences = [
    { date: 'Sept 2023 — Current', title: 'Course Assistant for Web Programming I', subtitle: 'Stevens Institute of Technology', details: ['Javascript', 'MongoDB', 'Node.js', 'Express', 'HTML', 'CSS'] },
    { date: 'May — July 2023', title: 'Software Engineering Intern', subtitle: 'Vibrnz', details: ['Javascript', 'PostgreSQL', 'Ruby on Rails', 'HTML', 'CSS'] },
    { date: 'Jan — May 2023', title: 'Course Assistant for Discrete Structures', subtitle: 'Stevens Institute of Technology', details: ['Scheme', 'Racket'] },
    { date: 'Sept — Dec 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'Javascript', 'HTML', 'CSS', 'Figma'] },
    { date: 'Jan — May 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'Javascript', 'HTML', 'CSS', 'Figma'] },
    { date: 'May — Aug 2021', title: 'Quality Assurance Engineer Intern', subtitle: 'Numerix LLC', details: ['Java', 'Python', 'Selenium', 'Jira'] },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div class="content">
      <Grid container spacing={2}>
        <Grid item xs={5} >
          <Avatar
            alt="Hasumi Tanemori"
            src="/profile.jpg" 
            sx={{
              width: 100,
              height: 100,
              marginRight: '16px',
              borderRadius: '50%', 
            }}
          />
          <Typography variant="h3" component="h1" >Hasumi Tanemori</Typography>
          <Typography variant="body1" >Hi, I’m Hasumi   —a software developer with a passion for user-centric design.</Typography>
          <Tabs
            orientation="vertical"
            class="left-line"
            value={tabValue}
            onChange={handleChange}
            aria-label="vertical tab menu"
            textColor="secondary"
            TabIndicatorProps={{
              style: { display: 'none' }
            }}
          >
            <Tab label="Experience" {...a11yProps(0)} />
            <Tab label="Projects" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item xs={7}>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" component="h2" align="left" color="white" sx={{ backgroundColor: '#004870', padding: '10px 20px' }}>
            EXPERIENCE
          </Typography>
          <Experience experiences={work_experiences} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" component="h2" align="left" color="white" sx={{ backgroundColor: '#004870', padding: '10px 20px' }}>
            PROJECTS
          </Typography>
        </TabPanel>
          
        </Grid>
      </Grid>
      </div>
      <footer style={{ backgroundColor: '#004870', color: 'white', padding: '16px 0', marginTop: 'auto' }}>
              <Typography variant="body1">
              Contact: <Link href="mailto:hasumi@tanemori.org" color="inherit">hasumi@tanemori.org</Link>
            </Typography>

    </footer>
    </div>
  );
}

export default App;
