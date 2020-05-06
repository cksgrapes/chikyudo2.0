import axios from 'axios'

/**
 * Contentful投稿取得
 */
const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchEntries(param) {
  const entries = await client.getEntries(param)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${entries.contentType.name}.`)
  return null
}

/**
 * YouTube動画取得
 * @param {*} resource
 * @param {*} params
 */
export async function fetchVideos(resource, params) {
  const API_URL = `https://www.googleapis.com/youtube/v3/${resource}`
  params.key = process.env.YOUTUBE_API_KEY

  const videos = await axios
    .get(API_URL, { params })
    .then((res) => {
      return res.data.items
    })
    .catch(() => {
      return null
    })

  return videos
}

/**
 * Instagram投稿取得
 * @param {*} limit 取得数を指定/未指定なら全件
 * @param {*} fields 取得フィールドを指定
 */
export function fetchPhotos(limit?: number, fields?: string) {
  const IG_BUSINESS_ACCOUNT = process.env.IG_BUSINESS_ACCOUNT
  const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN
  const API_URL = `https://graph.facebook.com/v6.0/`
  const paramLimit = `&limit=${limit}` || null
  fields = fields || 'id,caption,media_url,permalink,media_type,timestamp'

  const ALL_POSTS_URL = `${API_URL}${IG_BUSINESS_ACCOUNT}/media?fields=${fields}${paramLimit}&access_token=${IG_ACCESS_TOKEN}`

  const medias = axios
    .get(ALL_POSTS_URL)
    .then((res) => {
      return res.data
    })
    .catch(() => {
      return null
    })

  return medias
}

/**
 * 各ピックアップ情報
 */
export async function getPickups() {
  const pickupBook = await fetchEntries({
    content_type: 'books',
    order: '-fields.issue',
    limit: 1,
  })
  const pickupGame = await fetchVideos('search', {
    part: 'id,snippet',
    channelId: 'UCfN4BiPIfaTzuuX2n1aYyRg',
    order: 'date',
    maxResults: 1,
  })
  const pickupPhoto = await fetchPhotos(1)

  return {
    pickupBook: pickupBook[0],
    pickupGame: pickupGame[0],
    pickupPhoto: pickupPhoto.data[0],
  }
  return {
    pickupBook: pickupBook[0],
    pickupGame: pickupGame[0],
    pickupPhoto: pickupPhoto.data[0],
  }
}
