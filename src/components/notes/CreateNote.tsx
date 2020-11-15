import React, { useState } from 'react';
// import { createProject } from '../../store/actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../../store/actions/noteAction';
import { RootState } from '../../store/reducers/rootReducer';
import { Redirect } from 'react-router-dom'

const CreateNote = () => {
  
  const location = useSelector((state: RootState) => state.location);

  const [note, setNote] = useState({
    note: '',
    location: {
      lat: location.lat,
      lng: location.lng,
    },
    author:'test-user'
  });
  // const auth = useSelector(state => state.firebase.auth);


  const dispatch = useDispatch();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.target && setNote({ ...note, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(createNote(note));
    // props.history.push('/');
  }

    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Note</h5>
          <div className="input-field">
            <label htmlFor="note">Note</label>
            <input type="text" id="note" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="location">{location.lat} {location.lng}</label>
            <input type="text" id="location" disabled/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
}

export default CreateNote;
