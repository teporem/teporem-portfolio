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
    { date: 'Mar — Aug 2024', title: 'Software Engineer', subtitle: 'Vibrnz LLC', details: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'HTML', 'CSS'], about: "As a part-time Software Engineer, remotely collaborated with developers to implement new features and enhance functionalities to improve the overall user experience." },
    { date: 'Sept 2023 — May 2024', title: 'Course Assistant for Web Programming I', subtitle: 'Stevens Institute of Technology', details: ['JavaScript', 'MongoDB', 'Node.js', 'Express.js', 'HTML', 'CSS'], about: "Reinforced students' understanding of web development concepts through weekly office hours, online support, and grading of lab assignments." },
    { date: 'May — July 2023', title: 'Software Engineering Intern', subtitle: 'Vibrnz LLC', details: ['JavaScript', 'PostgreSQL', 'Ruby on Rails', 'HTML', 'CSS'], about: "During this remote internship, optimized user experience for web applications by implementing new features and refining existing components." },
    { date: 'Jan — May 2023', title: 'Course Assistant for Discrete Structures', subtitle: 'Stevens Institute of Technology', details: ['Scheme', 'Racket'], about: "Conducted weekly lab sessions, supported students with course content and functional programming, and assisted in assignments/exams grading" },
    { date: 'Sept — Dec 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'Figma'], about: "Implemented new features and improvements to different components of web applications and wrote unit tests and integration tests." },
    { date: 'Jan — May 2022', title: 'Software Developer Intern', subtitle: 'Thingee Corporation', details: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'Figma'], about: "Resolved issues in web applications including bugs and accessibility flaws." },
    { date: 'May — Aug 2021', title: 'Quality Assurance Engineer Intern', subtitle: 'Numerix LLC', details: ['Java', 'Python', 'Selenium', 'Jira'], about: "Developed automated quality assurance tests and conducted manual tests." },
  ];

  const project_experiences = [
    { date: 'Sept 2023 — Current', title: 'Haptic Hero', subtitle: 'Interdisciplinary Senior Design Project', details: ['AWS', 'React', 'Node.js', 'Express.js', 'Python', 'Raspberry Pi', 'Figma'], links: {"Github": "https://github.com/teporem/HapticHero", "More Info": "https://sites.google.com/stevens.edu/haptichero", "View": "https://teporem.github.io/HapticHero/", "View Files": ["/media/hh1.png", "/media/hh5.png","/media/hh2.png","/media/hh3.png","/media/hh4.png",]}, about: "Award-winning interdisciplinary project between Computer Science and Mechanical Engineering students to design and develop an accessible music-based rhythm game for individuals with visual impairments." },
    { date: 'Jan 2023', title: 'Portfolio', subtitle: 'Personal Website', details: ['JavaScript', 'React', 'Figma', 'HTML', 'CSS'], links: {"Github": "https://github.com/teporem/teporem.github.io", "View": ""}, about: "A simple portfolio site to compile work and project experiences." },
    { date: 'Dec 2023', title: 'Creative Pursuits', subtitle: 'Interactive Data Visualization', details: ['JavaScript', 'D3.js', 'Chart.js', 'jQuery', 'Adobe Illustrator'], links: {"Github": "https://github.com/teporem/CreativePursuits", "View": "https://teporem.github.io/CreativePursuits/"}, about: "A web-based data visualization project showcasing the statistics of Americans involved in creative hobbies and careers." },
    { date: 'Nov — Dec 2023', title: 'The Witch Animation', subtitle: '3D Character Animation', details: ['Cinema 4D', '3D Animation', 'Motion Tracking', 'Adobe Photoshop'], links: {"View Files": ["/media/witch.gif", "/media/witch1.png", "/media/witch2.png", "/media/witch3.png"]}, about: "A 3D character animation of a witch performing simple magic." },
    { date: 'Mar — May 2023', title: 'Campus Buddy', subtitle: 'Task Management Website', details: ['MongoDB', 'Redis', 'React', 'ImageMagick', 'Docker'], links: {"Github": "https://github.com/nromboug/CampusBuddy"}, about: "A task management site to allow students to keep track of goals, create to-dos, and schedule study sessions." },
    { date: 'Mar — Apr 2023', title: 'Canine Caboodle', subtitle: 'Dog Collection App', details: ['Java', 'Android Studio'], links: {"Github": "https://github.com/farihaxrahman/CanineCaboodle"}, about: "A prototype for a mobile game about collecting dog breeds." },
    { date: 'July — Aug 2022', title: 'Small Biz', subtitle: 'Small Business Connection Website', details: ['MongoDB', 'Node.js', 'Express.js', 'HTML', 'CSS'], links: {"Github": "https://github.com/NoahValente/CS-546-Final-Project"}, about: "Small business-focused social media platform to allow businesses to connect with other businesses and share posts with users." },
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
                src="/profile2.jpg" 
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

            <Link href="mailto:hasumi@tanemori.org" color="inherit" underline="hover">
                <ListItem>
                <ListItemIcon>
                    <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="hasumi@tanemori.org"  />
              </ListItem>
            </Link>
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
