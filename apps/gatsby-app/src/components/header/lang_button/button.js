import React from 'react';
import { render } from 'react-dom';
import Button from './butt';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Root = () => (
  <div style={styles}>
    <Button name="CodeSandbox" />
  </div>
);

render(<Root />, document.getElementById('root'));


