import dayjs from 'dayjs'

const getPostData = (post) => {
  const { sys, fields } = post

  return {
    category: () => {
      const { category } = fields
      if (typeof category === 'undefined') return false

      return [
        {
          name: category.fields.title,
          path: `/blog/${category.fields.slug}`,
        },
      ]
    },
    publishedDate: (format = 'YYYY.M.D ddd HH:mm') => {
      const date =
        typeof fields.publishedDate !== 'undefined'
          ? fields.publishedDate
          : sys.createdAt
      return dayjs(date).format(format)
    },
  }
}

export default getPostData
