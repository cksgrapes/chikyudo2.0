import axios from 'axios'
// import * as devFetch from '~/components/general/devFetch'

/**
 * Contentful投稿取得
 */
const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

export async function fetchEntries(param: any, previewMode = false) {
  //TODO: developement時はキャッシュを見るようにしたい
  // if (process.env.NODE_ENV !== 'production') {
  //   return await devFetch.fetchEntries(param)
  // }

  let entries: any

  if (!previewMode) {
    entries = await client.getEntries(param)
  } else {
    entries = await previewClient.getEntries(param)
  }

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${entries.contentType.name}.`)
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

//========================================

/**
 * トップページ用ピックアップ情報
 */
export async function getPickups() {
  const pickupBook = await fetchEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
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
    pickupBook: pickupBook
      ? {
          title: pickupBook[0].fields.title,
          slug: pickupBook[0].fields.slug,
          coverUrl: pickupBook[0].fields.coverimage[0].fields.file.url,
        }
      : null,
    pickupGame: pickupGame
      ? {
          id: pickupGame[0].id.videoId,
        }
      : null,
    pickupPhoto: pickupPhoto
      ? {
          permalink: pickupPhoto.data[0].permalink,
          // eslint-disable-next-line @typescript-eslint/camelcase
          media_url: pickupPhoto.data[0].media_url,
        }
      : null,
  }
}

/**
 * getBlogTypePaths
 * @param type
 */
export async function getContentPaths(type: string, path: string) {
  const posts: object[] = await fetchEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: type,
  })

  const paths: string[] = posts.map(
    (post: { fields: { slug: string } }) => `${path}/${post.fields.slug}`
  )

  return paths
}

/**
 * Blog Entries
 */
export async function getBlogEntries(
  pageType: 'all' | 'single' | 'category' = 'all',
  slug?: string,
  previewMode = false
) {
  const params = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'blog',
    order: '-sys.createdAt', //TODO: この順序を厳密に, publishedDateがあればそちら優先
  }

  const appendParams = {
    all: () => {
      return null
    },
    single: () => {
      params['fields.slug'] = slug
      return null
    },
    category: () => {
      params['fields.category.sys.contentType.sys.id'] = 'blogCategory'
      params['fields.category.fields.slug'] = slug
      return null
    },
  }
  appendParams[pageType]()

  let posts = await fetchEntries(params, previewMode)

  posts = posts
    ? posts.map(({ sys, fields }: any) => {
        const { category } = fields
        return {
          title: fields.title,
          body: fields.body,
          slug: fields.slug,
          date: {
            publishedAt: fields.publishedDate,
            createdAt: sys.createdAt,
          },
          category: {
            title: category ? category.fields.title : null,
            slug: category ? category.fields.slug : null,
          },
        }
      })
    : null

  return pageType === 'single' ? posts[0] : posts
}

/**
 * 書影情報
 * @param coverimage
 */
const getImagesData = (coverimage: any) => {
  let images:
    | {
        id: string
        fileUrl: string
      }[]
    | null

  if (coverimage != null) {
    images = coverimage.map((image: any) => {
      return {
        id: image.sys.id,
        fileUrl: image.fields.file.url,
      }
    })
  } else {
    images = null
  }

  return images
}

/**
 * Book Entries
 */
export async function getBookEntries(isSingle = false, slug?: string) {
  const params = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'books',
    order: '-fields.issue',
  }

  if (isSingle) {
    params['fields.slug'] = slug
  }

  let posts = await fetchEntries(params)

  posts = posts
    ? posts.map(({ fields }: any) => {
        const { sample, coverimage } = fields

        return {
          title: fields.title,
          slug: fields.slug,
          coverimage: getImagesData(coverimage),
          credit: fields.credit,
          intro: fields.intro,
          bookData: {
            price: fields.price,
            bookFormat: fields.bookformat,
            pageNum: fields.pagenum,
            issue: fields.issue,
          },
          sample: sample ? sample.fields.file.url : null,
          booth: fields.booth,
          metaDescription: fields.metaDescription,
        }
      })
    : null

  return isSingle ? posts[0] : posts
}
