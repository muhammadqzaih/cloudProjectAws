import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const MyTextField = ({ newQuery, setNewQuery, handleKeyPress, SendButton, onSendClick }) => {
  return (
    <TextField
      variant="filled"
      fullWidth
      label="Your command"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {/* Render the SendButton with styles and click handler */}
            <SendButton sx={{ color: 'black', cursor: 'pointer' }} onClick={onSendClick} />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: '#fff', // optional: to see border clearer
        },
        '& .MuiFilledInput-underline:before': {
          borderBottomColor: 'black',
        },
        '& .MuiFilledInput-underline:hover:before': {
          borderBottomColor: 'black',
        },
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: 'black',
        },
        '.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root':{
          color:'black'
        }
      }}
      autoComplete="off"
      value={newQuery}
      onChange={(e) => setNewQuery(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default MyTextField;
