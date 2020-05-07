export const MyParagraph = ({ children }: any) => {
  let src = <p>{children}</p>

  //画像時
  if (
    typeof children[0] !== 'string' &&
    typeof children[0].type === 'function' &&
    children[0].type.name === 'MyImg'
  ) {
    src = <figure>{children}</figure>
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
