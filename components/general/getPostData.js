import dayjs from 'dayjs';

const getPostData = (post) => {
  const {sys, fields} = post;

  return {
    categories: () => {
      return false; //バグあり, 仮で非表示, カテゴリがひとつのとき処理がまわらない, そもそも複数想定じゃくてよいのでは

      if (typeof fields.category === 'undefined') return false;

      let categories = fields.category;

      if (Array.isArray(categories)) {
        categories = fields.category.map(category => category.fields);
      } else {
        let _categoryies = []
        _categoryies.push(categories)
        categories = _categoryies
      }

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
