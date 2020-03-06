import { createStore } from 'redux';

import reducer from './modules/colors/reducer';

const store = createStore(reducer);

export default store;