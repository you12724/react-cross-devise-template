import axios from 'axios';

export default () => {
  axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
};
