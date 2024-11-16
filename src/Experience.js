import { Typography, Chip, Link} from '@mui/material';
import { Info as InfoIcon, GitHub as GitHubIcon, Visibility as VisibilityIcon, Link as LinkIcon} from '@mui/icons-material';
import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';
import FileModal from './FileModal.js';

const Experience = ({ experiences }) => {
  const createTimelineItems = () => {
    return experiences.map((experience, index) => (
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="caption">
            {experience.date}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          {index < experiences.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
            <Typography  component="h3" sx={{fontSize: 'large',fontWeight: '500',}}>
              {experience.title}
            </Typography>
            <Typography variant="body2" sx={{fontSize: 'medium'}}>
              {experience.subtitle}
            </Typography>
            <Typography variant="caption">
              {experience.details.map((detail) => (
                <Chip label={detail} style={{ margin: '4px 8px 4px 0', backgroundColor: 'rgba(255, 107, 107, 0.6)', height: '30px', fontSize: 'small' }}/>
              ))}
            </Typography>
            {experience.about && (
              <Typography variant="body1" style={{ margin: '4px' }}>
                {experience.about}
              </Typography>
            )}

            {experience.links && (
              <Typography variant="body2" component="p" sx={{ marginTop: '4px', fontSize: 'small'}}>
                {Object.entries(experience.links).map(([name, url]) => (
                  typeof url === 'string' ? (
                    <Link href={url} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" style={{ display: 'inline-flex', alignItems: 'center', margin: '4px 8px 4px 0' }}>
                      { name === "Github" ? <GitHubIcon /> :
                        name === "More Info" ? <InfoIcon /> :
                        name === "View" ? <VisibilityIcon /> : 
                        <LinkIcon />
                      }
                      <span style={{ padding: '0 4px' }}>{name}</span>
                    </Link>
                  ) : (
                    name === "View Files" ? <FileModal files={url}/> : ''
                  )
                  
                ))}
              </Typography>
            )}
            
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <Timeline sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0.2,
      },
    }}>
      {createTimelineItems()}
    </Timeline>
  );
};

export default Experience;