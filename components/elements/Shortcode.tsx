import postStyles from '~/components/styles/modules/layouts/Post.module.scss'

const getGooglemapCode = (sc: string) => {
  const url = sc.match(/src="(.+?)"/)
  return (
    <div className={postStyles.googlemap}>
      <iframe src={url[1]}></iframe>
    </div>
  )
}

const getYoutubeCode = (sc: string) => {
  const id: string = sc
    .slice(2, -2)
    .split(' ')[1]
    .replace('https://youtu.be/', '')
  return (
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

const getAflliateLinkCode = (sc: string) => {
  //TODO: APIでの取得に変更
  const data = {
    title: sc.match(/title="(.+?)"/),
    img: sc.match(/img="(.+?)"/),
    amazon: sc.match(/amazon="(.+?)"/),
    rakuten: sc.match(/rakuten="(.+?)"/),
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

  return (
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

const Shortcode = ({ src }: { src: any }) => {
  if (/googlemap/.test(src)) {
    src = getGooglemapCode(src)
  }

  if (/youtube/.test(src)) {
    src = getYoutubeCode(src)
  }

  if (/affiliatelink/.test(src)) {
    src = getAflliateLinkCode(src)
  }

  return src
}

export default Shortcode
