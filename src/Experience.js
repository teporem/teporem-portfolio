import { Typography, Chip} from '@mui/material';
import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';

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
            <Typography  component="h3" sx={{fontSize: '1.1rem',fontWeight: '500',}}>
              {experience.title}
            </Typography>
            <Typography variant="body2">
              {experience.subtitle}
            </Typography>
            <Typography variant="caption">
              {experience.details.map((detail) => (
                <Chip label={detail} style={{ margin: '4px', backgroundColor: 'rgba(255, 107, 107, 0.6)', fontSize: '0.6rem' }}/>
              ))}
            </Typography>
            {experience.links && (
            <Typography variant="caption" component="p">
              {Object.entries(experience.links).map(([name, url], linkIndex) => (
                [<span key={linkIndex}>{linkIndex > 0 && ' | '}</span>,
                <a key={`${linkIndex}-${name}`} href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>]
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