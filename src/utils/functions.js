export function normalizeRGB([red, green, blue]) {
  const sum = red + green + blue;
  if (sum <= 0) return [0, 0, 0];

  const newRed = red / sum;
  const newGreen = green / sum;
  const newBlue = blue / sum;

  return [newRed, newGreen, newBlue].map(v => v.toFixed(2) || 0);
};


export function rgb2cmyk([red, green, blue]) {
  const [newRed, newGreen, newBlue] = getNewRGB(red, green, blue);

  const black = 1 - Math.max(newRed, newGreen, newBlue);
  const cyan = parseFloat((1 - newRed - black) / (1 - black));
  const magenta = parseFloat((1 - newGreen - black) / (1 - black));
  const yellow = parseFloat((1 - newBlue - black) / (1 - black));

  return [cyan || 0, magenta || 0, yellow || 0, black || 0].map(v => v.toFixed(2));
}


// See: http://www.javascripter.net/faq/rgb2hsv.htm
export function rgb2hsv([red, green, blue]) {
  const [newRed, newGreen, newBlue] = getNewRGB(red, green, blue);
  console.log('Novos valores: ', newRed, newGreen, newBlue);

  const min = Math.min(newRed, newGreen, newBlue);
  const max = Math.max(newRed, newGreen, newBlue);

  if (min === max) return [0, 0, min];

  const greenMinusBlue = newGreen - newBlue;
  const blueMinusRed = newBlue - newRed;
  const redMinusGreen = newRed - newGreen;

  let toUse = greenMinusBlue;
  let toAdd = 0;

  if (max === newRed) {
    if (newGreen < newBlue) toAdd = 360;
  } else if (max === newGreen) {
    toUse = blueMinusRed;
    toAdd = 120;
  } else if (max === newBlue) {
    toUse = redMinusGreen;
    toAdd = 240;
  }

  const H = `${Math.ceil(60 * (toUse / (max - min)) + toAdd)}°`;
  const S = `${parseInt((max - min) / max * 100)}%`;
  const V = `${parseInt(max * 100)}%`;

  return [H, S, V].map(v => v || 0);
}


export function rgb2GrayScale(rgb) {
  return rgb.reduce((total, v) => total += v, 0) / 3;
}


/**
 * Return the RGB values between 0.0 and 1.0
 * 
 * @param int red 
 * @param int green 
 * @param int blue 
 */
function getNewRGB(red, green, blue) {
  const divider = 255.0;

  const newRed = parseFloat(red / divider);
  const newGreen = parseFloat(green / divider);
  const newBlue = parseFloat(blue / divider);

  return [newRed, newGreen, newBlue];
}