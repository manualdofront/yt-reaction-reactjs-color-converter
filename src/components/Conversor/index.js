import React, { Fragment, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { normalizeRGB, rgb2cmyk, rgb2hsv, rgb2GrayScale } from '../../utils/functions';
import { ConversionList } from './style';

function Conversor() {
  const colors = useSelector(state => state);

  const rgbNormalized = useMemo(() => normalizeRGB(colors), [colors]);
  const newCMYK = useMemo(() => rgb2cmyk(colors), [colors]);
  const newHSV = useMemo(() => rgb2hsv(colors), [colors]);
  const grayscale = useMemo(() => rgb2GrayScale(colors), [colors]);

  return (
    <Fragment>
      <hr/>
      <ConversionList>
        <li>
          <h4 className="text-center">Normalizar RGB</h4>
          <strong>{rgbNormalized.join(' | ')}</strong>
        </li>
        <li>
          <h4 className="text-center">RGB para CMYK</h4>
          <strong>{newCMYK.join(' | ')}</strong>
        </li>
        <li>
          <h4 className="text-center">RGB para HSV</h4>
          <strong>{newHSV.join(' | ')}</strong>
        </li>
        <li>
          <h4 className="text-center">RGB para Escala de Cinza</h4>
          <strong>{Math.ceil(grayscale)}</strong>
        </li>
      </ConversionList>
      <hr style={{ marginBottom: '3%' }} />
    </Fragment>
  );
};

export default Conversor;