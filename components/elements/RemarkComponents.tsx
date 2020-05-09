import postStyles from '~/components/styles/modules/layouts/Post.module.scss'

export const MyParagraph = ({ children }: any) => {
  //TODO:あとでソース整理
  let src = <p>{children}</p>

  //画像時
  if (
    typeof children[0] !== 'string' &&
    typeof children[0].type === 'function' &&
    children[0].type.name === 'MyImg'
  ) {
    src = <figure>{children}</figure>
  }

  if (children[0] === '[') {
    const shortcode: string = children.join('')

    if (/googlemap/.test(shortcode)) {
      const url = shortcode.match(/src="(.+?)"/)
      src = (
        <div className={postStyles.googlemap}>
          <iframe src={url[1]}></iframe>
        </div>
      )
    }

    if (/youtube/.test(shortcode)) {
      const id: string = shortcode
        .slice(2, -2)
        .split(' ')[1]
        .replace('https://youtu.be/', '')
      src = (
        <figure className={postStyles.video}>
          <div className={postStyles.innerVideo}>
            <iframe
              width="500"
              height="281"
              src={`https://www.youtube.com/embed/${id}?feature=oembed`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </figure>
      )
    }

    if (/affiliatelink/.test(shortcode)) {
      //TODO: APIでの取得に変更
      const data = {
        title: shortcode.match(/title="(.+?)"/),
        img: shortcode.match(/img="(.+?)"/),
        amazon: shortcode.match(/amazon="(.+?)"/),
        rakuten: shortcode.match(/rakuten="(.+?)"/),
      }

      const elm = {
        title: data.title ? (
          <p className={postStyles.amazonItem_heading}>{data.title[1]}</p>
        ) : null,
        img: data.img ? (
          <div className={postStyles.amazonItem_image}>
            <img src={data.img[1]} alt="" />
          </div>
        ) : null,
        amazon: data.amazon ? (
          <li>
            <a
              className={postStyles['amazonItem_link-amazon']}
              href={data.amazon[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazonで購入
            </a>
          </li>
        ) : null,
        rakuten: data.rakuten ? (
          <li>
            <a
              className={postStyles['amazonItem_link-rakuten']}
              href={data.rakuten[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              楽天で購入
            </a>
          </li>
        ) : null,
      }

      src = (
        <div className={postStyles.amazonItem}>
          {elm.img}
          <div className={postStyles.amazonItem_body}>
            {elm.title}
            <ul className={postStyles.amazonItem_links}>
              {elm.amazon}
              {elm.rakuten}
            </ul>
          </div>
        </div>
      )
    }
  }

  return src
}

export const MyImg = ({ src, alt }: any) => {
  let figcaption = null

  if (alt.includes('@@')) {
    figcaption = <figcaption>{alt.replace('@@', '')}</figcaption>
  }

  return (
    <>
      <picture>
        <source type="image/webp" srcSet={`https:${src}?fm=webp`} />
        <img src={`https:${src}`} alt={alt} />
      </picture>
      {figcaption}
    </>
  )
}
