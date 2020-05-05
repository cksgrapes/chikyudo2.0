import classNames from 'classnames'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, heading, description } = this.props;

        return(
            <>
                <div className={classNames(styles.post,generalStyles.categoryHeading, generalStyles.pageHeading)}>
                    <h1 className={styles.post_heading}>{ heading }</h1>
                    <p className={styles.post_description}>{ description }</p>
                </div>
                <div className={classNames(styles.post,generalStyles.commonSection)}>
                    <div className={styles.post_body}>
                        { children }
                    </div>
                </div>
            </>
        )
    }
}

Post.defaultProps = {
    heading: 'Heading',
    description: '見出し'
};

export default Post;
