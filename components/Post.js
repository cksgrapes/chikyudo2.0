class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, heading, description } = this.props;

        return(
            <div className="post">
                <div className="categoryHeading pageHeading">
                    <h1 className="post_heading">{ heading }</h1>
                    <p className="post_description">{ description }</p>
                </div>
                <div className="post commonSection">
                    <div className="post_body wysiwyg">
                        { children }
                    </div>
                </div>
            </div>
        )
    }
}

Post.defaultProps = {
    heading: 'Heading',
    description: '見出し'
};

export default Post;