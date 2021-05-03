import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const root = process.env.REACT_APP_ROOT_URL;

const API = {
  getArtist: async input => {
    const res = await dispatcher(`artist.search?q_artist=${input}`)
    return jsonpCleaner(res.data).artist_list
  }
}

const dispatcher = async searchQuery => await axios.get(`${root}${searchQuery}&apikey=${key}&format=jsonp&callback=callback`)

const jsonpCleaner = (res) => {
  const newJSON = JSON.parse(res.replace('callback(', '').slice(0, -2))
  return newJSON.message.body
}

export { API };
