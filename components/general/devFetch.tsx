import { useEffect, useState } from 'react'
import axios from 'axios'

export class LocalStorageData {
  private localData: string
  private storageKey: string

  constructor(storageKey: string) {
    this.storageKey = storageKey
  }

  getData() {
    this.localData = localStorage.getItem(this.storageKey)
      ? localStorage.getItem(this.storageKey)
      : null
    if (this.localData) {
      return JSON.parse(this.localData)
    }
    return null
  }

  setData(fetchedData: object) {
    localStorage.setItem(this.storageKey, JSON.stringify(fetchedData))
    return null
  }
}

/**
 * Contentful投稿取得
 */
const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

interface LocalEntriesParams {
  localEntries: string | object
  setLocalEntries: string | object
}

export async function fetchEntries(param: any) {
  const LocalContentfulPosts = new LocalStorageData('contentfulPosts')
  const localEntries = LocalContentfulPosts.getData()

  if (localEntries != null) return localEntries

  const entries = client.getEntries(param)
  if (entries.items) {
    LocalContentfulPosts.setData(entries.items)
    return entries.items
  }

  return null
}

/**
 * YouTube動画取得
 * @param {*} resource
 * @param {*} params
 */

interface FetchVideosParams {
  key: string
  part: string
  channelId: string
  order: string
  maxResults: number
}

export async function fetchVideos(
  resource: string,
  params: Partial<FetchVideosParams>
) {
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
  const paramLimit = limit ? `&limit=${limit}` : null
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
