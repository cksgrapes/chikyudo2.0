import SEO from '~/next-seo.config'

const getMetaDesc = (metaDescription: string, content: string) => {
  if (metaDescription != null) {
    return metaDescription
  }

  if (metaDescription == null && content != null) {
    const MAX_LENGTH = 140
    if (content.length > MAX_LENGTH) {
      content = content.replace(/!\[.+?\]\(.+?\)/, '')
      content = content.substr(0, MAX_LENGTH) + '...'
    }
    return content
  }

  return SEO.description
}

const getOgpImage = (ogpImage: string, content: string) => {
  if (ogpImage != null) {
    return ogpImage
  }

  const firstContentImage = /!\[.+?\]\((.+?)\)/.exec(content)
  if (firstContentImage != null) {
    return `http:${firstContentImage[1]}`
  }

  return SEO.openGraph.images[0].url
}

const getMeta = (post, useDescContent) => {
  return {
    title: `${post.title} - 千柩堂`,
    description: getMetaDesc(post.metaDescription, useDescContent),
    openGraph: {
      title: `${post.title} - 千柩堂`,
      description: getMetaDesc(post.metaDescription, useDescContent),
      images: [
        {
          url: getOgpImage(post.ogpImage, post.body),
        },
      ],
      type: 'article',
    },
  }
}

export default getMeta
