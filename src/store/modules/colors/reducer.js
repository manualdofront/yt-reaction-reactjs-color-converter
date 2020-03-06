export default function colors(state = [0, 0, 0], action) {
  switch (action.type) {
    case 'UPDATE_COLOR':
      let colors = [...state];
      
      const { color } = action;
      if (color.name === 'red') colors[0] = parseInt(color.value);
      else if (color.name === 'green') colors[1] = parseInt(color.value);
      else colors[2] = parseInt(color.value);

      return [...colors];
  
    default:
      return state;
  }
}