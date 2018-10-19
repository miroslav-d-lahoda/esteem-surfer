import axios from 'axios';
import {BACKEND_URL} from '../config';

export const getCurrencyRate = cur =>
  axios
    .get(`${BACKEND_URL}/api/currencyRate/${cur.toUpperCase()}/steem`)
    .then(resp => resp.data);

export const getNodes = () =>
  axios
    .get(`https://storage.googleapis.com/esteem/public_nodes.json`)
    .then(resp => resp.data.steemd);

export const getActiveVotes = user =>
  axios.get(`${BACKEND_URL}/api/votes/${user}`).then(resp => resp.data);


export const getTopPosts = user => axios.get(`${BACKEND_URL}/api/top-posts/${user}`).then(resp => resp.data);

export const getMarketData = () => axios.get(`${BACKEND_URL}/api/market-data/`).then(resp => resp.data);

export const uploadImage = (file) => {
  const fData = new FormData();
  fData.append('postimage', file);


  return axios.post('https://img.esteem.ws/backend.php', fData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });


  /*
  return $http({
    url: 'https://img.esteem.ws/backend.php',
    method: 'POST',
    data: fData,
    uploadEventHandlers: {
      progress: function (e) {
        if (onProgress) onProgress(e);
      }
    },
    headers: {
      'Content-Type': undefined
    }
  })
  */

};