import * as React from 'react';
import {Visibility as VisibilityIcon} from '@mui/icons-material';
import {Button, DialogTitle, Dialog, DialogContent, Typography } from '@mui/material';

export default function FileModal(props) {
  const {files} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleOpen}
        sx={{
          color: '#004870',
          padding: '5px 10px',
          textTransform: 'none',
          margin: '5px 0px'}}>
          See {files.length} Images
      </Button>
      <Dialog onClose={handleClose} open={open} scroll="body">
        <div class="modal-content">
          <DialogTitle>
            <Typography variant="h4" component="h2" align="left" sx={{ padding: '5px 20px', fontWeight: '500' }}>
              Related Images & Files
            </Typography>
          </DialogTitle>
          <DialogContent>
          {files.map((file, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <img 
                src={file} 
                alt={`File ${index}`} 
                style={{ width: '100%', borderRadius: '8px' }} 
              />
            </div>
          ))}
          </DialogContent>
        </div>
        
      </Dialog>
    </div>
  );
}
