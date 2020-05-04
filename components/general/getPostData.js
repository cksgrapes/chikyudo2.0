import dayjs from 'dayjs';

const getPostData = (post) => {
  const {sys, fields} = post;

  return {
    categories: () => {
      if (typeof fields.category === 'undefined') return false;

      const categories = fields.category.map(category => category.fields);
      return categories.map(category => {
        return {
          name: category.title,
          path: `/blog/tags/${category.slug}`
        }
      });
    },
    publishedDate: (format = 'YYYY.M.D ddd HH:mm') => {
      const date = (typeof fields.publishedDate !== 'undefined') ? fields.publishedDate : sys.createdAt;
      return dayjs(date).format(format)
    }
  }
};

export default getPostData
