import React from 'react';
import Progress from './progress/Progress';
import Form from './detailsForm/Form';

export function CaptureInterface() {

  return (
    <div>
        <Progress total={3} />
        <Form />
    </div>
  );
}
