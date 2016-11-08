// @flow
import {GOOGLE_KEY} from '../env';
export const YOUTUBE_QUERY = 'YOUTUBE_SEARCH_QUERY';
export const YOUTUBE_RESULTS = 'YOUTUBE_SEARCH_RESULTS';

//
//
// https://www.googleapis.com/youtube/v3/search
//https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&part=contentDetails&key={YOUR_API_KEY}

export function query(q) {
  return {
    type: YOUTUBE_QUERY,
    q
  };
}

export function results(res: Array, nextPage: string, total: integer) {
  return {
    type: YOUTUBE_RESULTS,
    res, nextPage, total
  };
}

export function search(q) {
  const s = `${q} full album`;
  return (dispatch) => {
    dispatch(query(q));
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${s}&maxResults=10&key=${GOOGLE_KEY}`)
      .then((response)=> {
        if (response.status !== 200) {
          console.error('Looks like there was a problem. Status Code: ' +
            response.status);
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((json)=> {
        console.log(json);
        dispatch(results(json.items, json.nextPageToken, json.totalResults));
      })
      .catch((e)=> {
        console.error(e);
      });
  };
}

