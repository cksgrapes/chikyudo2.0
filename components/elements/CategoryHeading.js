import CategoryList from '~/components/elements/CategoryList';
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'
import classNames from 'classnames'
import { ExpandMore } from '@material-ui/icons';

const getNavItems = () => {
  return [
      { name: 'Blog', path: '/blog/information' },
      { name: 'Information', path: '/blog/information' },
      { name: 'Books', path: '/works' },
      { name: 'Tips', path: '/blog' },
      { name: 'Photos', path: '/photo' },
      { name: 'Journal', path: '/blog/journal' },
      { name: 'Events', path: '/events' },
  ];
};

const CategoryHeading = (props) => {
  const subHeading = (props.description) ? <p className={styles.post_subHeading}>{ props.description }</p> : null;

  return (
  <div className={classNames(styles.post, generalStyles.categoryHeading)}>
    <h1 className={styles.post_heading}>{ props.name }<ExpandMore /></h1>
    { subHeading }
    <CategoryList items={getNavItems()} />
  </div>
  )
};

CategoryHeading.defaultProps = {
  name: 'Category Name',
  description: ''
}

export default CategoryHeading;
