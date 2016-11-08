// @flow
export const YOUTUBE_QUERY = 'YOUTUBE_SEARCH_QUERY';

//
// AIzaSyBbBJuK2wZAa1n8q7ii7HP0aZqrIqcAVIo
// https://www.googleapis.com/youtube/v3/search
//https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&part=contentDetails&key={YOUR_API_KEY}

export function query(q) {
  return {
    type: YOUTUBE_QUERY,
    q
  };
}

export function search(q) {
  return (dispatch) => {
    dispatch(query(q));
  };
}

