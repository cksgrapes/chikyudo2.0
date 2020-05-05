import axios from 'axios';

/**
 * Contentful
 */
const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function fetchEntries(param) {
  const entries = await client.getEntries(param)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
  return null
}

/**
 * YouTube
 */
export async function fetchVideos(resource, params) {
  // const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
  const API_URL = `https://www.googleapis.com/youtube/v3/${resource}`
  params.key = process.env.YOUTUBE_API_KEY

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

/**
 * Instagram
 */
export function fetchPhotos() {
  const IG_BUSINESS_ACCOUNT = process.env.IG_BUSINESS_ACCOUNT
  const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN
  const API_URL = `https://graph.facebook.com/v6.0/`

  const ALL_POSTS_URL = `${API_URL}${IG_BUSINESS_ACCOUNT}/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${IG_ACCESS_TOKEN}`;

  const medias = axios
    .get(ALL_POSTS_URL)
    .then(res => {
      console.log({res});
      return res.data
    })
    .catch(() => {
        return null
    });

  return medias
}
