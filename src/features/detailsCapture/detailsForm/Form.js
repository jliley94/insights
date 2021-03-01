import { useState } from 'react';
import { FormContainer, FormSection, Heading, Input, Button } from './Form.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCurrentProgress,
  selectName,
  updateName
} from '../detailsCaptureSlice';

export default function Form(props) {
  const currentProgress = useSelector(selectCurrentProgress);
  const currentName = useSelector(selectName);
  const dispatch = useDispatch();
  const onSubmit = (name, event) => {
    event.preventDefault();
    console.log("triggered");
    //props.setInput(name);
    dispatch(increment());
  };
  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
  }

    return (
      <FormContainer>
          <>
          { currentProgress === 1 &&
            <FormSection onSubmit={(event) => onSubmit("link", event)}>
                <Heading>Name</Heading>
                
                <Input
                type="text"
                name="name"
                placeholder="Whats your name"
                value={currentName}
                onChange={(event) => dispatch(updateName(event.target.value))}
                />

              <Button type="submit">
                Continue
              </Button>
            </FormSection>
          }
          </>
          <>
          { currentProgress === 2 &&
            <FormSection onSubmit={(event) => onSubmit("link", event)}>
                <Heading>Location</Heading>

                <Button negative type="button" onClick={() => shareLocation()}>
                Share Location?
              </Button>

              <Button negative type="button" onClick={() => dispatch(decrement())}>
                Back
              </Button>

              <Button type="submit">
                Continue
              </Button>
              
            </FormSection>
          }
          </>
          <>
          { currentProgress === 3 &&
            <FormSection onSubmit={(event) => onSubmit("link", event)}>
                <Heading>Theme</Heading>
                
                <Input
                type="text"
                name="name"
                placeholder="Whats your name"
                value={currentName}
                onChange={(event) => dispatch(updateName(event.target.value))}
                />

              <Button type="submit">
                Add
              </Button>
            </FormSection>
          }
          </>
      </FormContainer>
    );
  }