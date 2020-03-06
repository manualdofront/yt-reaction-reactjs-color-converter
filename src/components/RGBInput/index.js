import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RGBForm } from './style';

export default function RGBInput() {

  const [ red, green, blue ] = useSelector(state => state);

  const dispatch = useDispatch();

  function handleChangeColor(e, color) {    
    let { value } = e.target;

    if (value < 0) value = 0;
    else if (value > 255) value = 255;

    dispatch({
      type: 'UPDATE_COLOR',
      color: {
        name: color,
        value
      }
    });
  }

  return (
    <Fragment>
      <RGBForm>
        <input type="number" min="0" max="255" onChange={e => handleChangeColor(e, 'red')} value={red} className='border-red' placeholder="R" />
        <input type="number" min="0" max="255" onChange={e => handleChangeColor(e, 'green')} value={green} className='border-green' placeholder="G" />
        <input type="number" min="0" max="255" onChange={e => handleChangeColor(e, 'blue')} value={blue} className='border-blue' placeholder="B" />
      </RGBForm>
    </Fragment>
  );
};
