import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

export async function fetchVideos(resource, params) {
  const API_URL = `https://www.googleapis.com/youtube/v3/${resource}`
  params.key = YOUTUBE_API_KEY

  const videos = await axios
    .get(API_URL, { params })
    .then(res => {
      return res.data.items
    })
    .catch(() => {
        return null
    });

  return videos
}
