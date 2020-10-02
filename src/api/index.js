import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const root = process.env.REACT_APP_ROOT_URL;

const API = {
  getArtist: async input => {
    const res = await dispatcher(`artist.search?q_artist=${input}`);
    return res;
  }
};

const dispatcher = async searchQuery => {
  const res = await axios.get(
    `${root}${searchQuery}&apikey=${key}&format=jsonp&callback=calllback`
  );
  return res;
};

export { API };
