import logo from './logo.svg';
import './App.css';
import Experience from './Experience.js';
import * as React from 'react';
import { Grid, Typography, Tabs, Tab, Box, Avatar, Link, Button, Popover, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { VolumeUp as VolumeUpIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function App() {
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
          <Box
          sx={{
            p: 3,
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 100px)',
            '@media (max-width: 600px)': {
              maxHeight: 'calc(50vh - 100px)',
              overflowY: 'visible',
            },
          }}
        >
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
    { date: 'Sept 2023 — Current', title: 'Course Assistant for Web Programming I', subtitle: 'Stevens Institute of Technology', details: ['JavaScript', 'MongoDB', 'Node.js', 'Express.js', 'HTML', 'CSS'] },
    { date: 'May — July 2023', title: 'Software Engineering Intern', subtitle: 'Vibrnz', details: ['JavaScript', 'PostgreSQL', 'Ruby on Rails', 'HTML', 'CSS'] },
    { date: 'Jan — May 2023', title: 'Course Assistant for Discrete Structures', subtitle: 'Stevens Institute of Technology', details: ['Scheme', 'Racket'] },
    { date: 'Sept — Dec 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'Figma'] },
    { date: 'Jan — May 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'Figma'] },
    { date: 'May — Aug 2021', title: 'Quality Assurance Engineer Intern', subtitle: 'Numerix LLC', details: ['Java', 'Python', 'Selenium', 'Jira'] },
  ];

  const project_experiences = [
    { date: 'Sept 2023 — Current', title: 'Haptic Hero', subtitle: 'Interdisciplinary Senior Design Project', details: ['React', 'Node.js', 'Express.js', 'Python', 'Raspberry Pi', 'Figma'], links: {"Github": "https://github.com/teporem/HapticHero", "More Info": "https://sites.google.com/stevens.edu/haptichero"} },
    { date: 'Jan 2023', title: 'Portfolio', subtitle: 'Personal Website', details: ['JavaScript', 'React', 'Figma', 'HTML', 'CSS'], links: {"Github": "https://github.com/teporem/teporem.github.io", "View": ""} },
    { date: 'Dec 2023', title: 'Creative Pursuits', subtitle: 'Interactive Data Visualization', details: ['JavaScript', 'D3.js', 'Chart.js', 'jQuery', 'Adobe Illustrator'], links: {"Github": "https://github.com/teporem/CreativePursuits", "View": "https://teporem.github.io/CreativePursuits/"} },
    { date: 'Mar — May 2023', title: 'Campus Buddy', subtitle: 'Task Management Website', details: ['MongoDB', 'Redis', 'React', 'ImageMagick', 'Docker'], links: {"Github": "https://github.com/nromboug/CampusBuddy"} },
    { date: 'Mar — Apr 2023', title: 'Canine Caboodle', subtitle: 'Dog Collection App', details: ['Java', 'Android Studio'], links: {"Github": "https://github.com/farihaxrahman/CanineCaboodle"} },
    { date: 'July — Aug 2022', title: 'Small Biz', subtitle: 'Small Business Connection Website', details: ['MongoDB', 'Node.js', 'Express.js', 'HTML', 'CSS'], links: {"Github": "https://github.com/NoahValente/CS-546-Final-Project"} },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div className="content">
      <Grid container spacing={2} style={{ height: '100%' }}>
        <Grid container xs={12} sm={5} alignContent="center" style={{ maxHeight: '100%' }}>
          <Grid container spacing={2} alignItems="center" style={{padding:"10px"}}>
            <Grid item xs={4} >
              <Avatar
                alt="Hasumi Tanemori"
                src="/profile.jpg" 
                sx={{
                  width: 100,
                  height: 100,
                  marginLeft: 'auto',
                  borderRadius: '50%', 
                }}
              />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h3" component="h1" style={{padding:"10px", fontFamily:"Tauri, Roboto, sans-serif"}} sx={{ textAlign: 'left' }}>HASUMI TANEMORI</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={12} >
            <Typography variant="body1" style={{padding:"10px 10px 10px 30px "}} >
              Hi, I’m 
              <Button
                size="small"
                endIcon={<VolumeUpIcon />}
                onClick={() => {
                  const audio = new Audio('/hasumi.mp3');
                  audio.play();
                }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              > Hasumi
              </Button>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography variant="caption" style={{padding:"2px 5px"}}>Hah-su-mee</Typography>
              </Popover>
              —a software developer <br /> with a passion for user-centric design.
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Tabs
              orientation={isMobile ? 'horizontal' : 'vertical'}
              class="left-line"
              variant='scrollable'
              scrollButtons={isMobile ? 'auto' : false}
              allowScrollButtonsMobile={isMobile}
              value={tabValue}
              onChange={handleChange}
              aria-label="vertical tab menu"
              textColor="secondary"
              TabIndicatorProps={{
                style: { display: 'none' }
              }}
              sx={{ overflowX: 'auto' }}
            >
              <Tab label="Experience" sx={{fontSize: '1.2rem',fontWeight: 'bold',}} {...a11yProps(0)} />
              <Tab label="Projects" sx={{fontSize: '1.2rem',fontWeight: 'bold',}} {...a11yProps(1)} />
              <Tab label="Resume" sx={{fontSize: '1.2rem',fontWeight: 'bold',}} {...a11yProps(2)} />
              <Tab label="Contact" sx={{fontSize: '1.2rem',fontWeight: 'bold',}} {...a11yProps(3)} />
            </Tabs>            
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={7} style={{ height: '100%' }}>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" component="h2" align="left" color="white" sx={{ backgroundColor: '#004870', padding: '5px 20px', fontWeight: '500' }}>
            EXPERIENCE
          </Typography>
          <Experience experiences={work_experiences} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" component="h2" align="left" color="white" sx={{ backgroundColor: '#004870', padding: '5px 20px', fontWeight: '500' }}>
            PROJECTS
          </Typography>
          <Experience experiences={project_experiences} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <div style={{ paddingBottom: '20px' }}>
            <object
              data="resume.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            >
              <p>Your browser does not support embedded PDF files. You can <a href="resume.pdf">download the PDF</a> instead.</p>
            </object>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h5" component="h2" align="left" color="white" sx={{ backgroundColor: '#004870', padding: '5px 20px', fontWeight: '500' }}>
            CONTACT
          </Typography>
          <List >
            <Link href="https://www.linkedin.com/in/hasumi-tanemori/" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
              <ListItem>
                <ListItemIcon>
                    <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
            </Link>
            <Link href="https://github.com/teporem" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
              <ListItem>
              <ListItemIcon>
                  <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItem>
            </Link>
            
            <Link href="mailto:hasumi@tanemori.org" color="inherit" underline="hover">
              <ListItem>
              <ListItemIcon>
                  <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="hasumi@tanemori.org"  />
            </ListItem>
            </Link>
            
          </List>
        </TabPanel>
        </Grid>
      </Grid>
      </div>
      <footer className="App-footer">
        <Typography variant="caption">
          Contact: <Link href="mailto:hasumi@tanemori.org" color="inherit" underline="hover">hasumi@tanemori.org</Link> {' '}
        </Typography>
        <div className="icons">
          <Link href="https://www.linkedin.com/in/hasumi-tanemori/" target="_blank" rel="noopener noreferrer" color="inherit"><LinkedInIcon /></Link> {' '}
          <Link href="https://github.com/teporem" target="_blank" rel="noopener noreferrer" color="inherit"><GitHubIcon /></Link> 
        </div>
      </footer>
    </div>
  );
}

export default App;
