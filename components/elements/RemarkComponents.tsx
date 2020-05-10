import Shortcode from '~/components/elements/Shortcode'

export const MyParagraph = ({ children }: any) => {
  let src = <p>{children}</p>

  //画像
  if (
    typeof children[0] !== 'string' &&
    typeof children[0].type === 'function' &&
    children[0].type.name === 'MyImg'
  ) {
    src = children
  }

  // ショートコード
  if (children[0] === '[') {
    const shortcode: string = children.join('')
    src = <Shortcode src={shortcode} />
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
      <figure>
        <picture>
          <source type="image/webp" srcSet={`https:${src}?fm=webp`} />
          <img src={`https:${src}`} alt={alt} />
        </picture>
        {figcaption}
      </figure>
    </>
  )
}
