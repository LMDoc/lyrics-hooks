import axios from 'axios'

const key = process.env.REACT_APP_API_KEY
const root = process.env.REACT_APP_ROOT_URL
const test = `artist.search?format=jsonp&callback=callback&q_artist=cardi&apikey=${key}`

const API = {
    getLyrics: async () => {
        const res = await axios.get(`${root}${test}`)
        return res
    }
}

export { API }