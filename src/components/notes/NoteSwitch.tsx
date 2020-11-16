import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const NoteSwitch = () => {
  
  return (
    <Switch
        // checked={state.checkedB}
        // onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
  )
}

export default NoteSwitch;