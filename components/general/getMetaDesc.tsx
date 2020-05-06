const getMetaDesc = (metaDescription: string, intro: string) => {
  const MAX_LENGTH: number = 140

  if (!metaDescription && intro.length > MAX_LENGTH) {
    intro = intro.substr(0, MAX_LENGTH) + '...'
  }

  return metaDescription || intro
}

export default getMetaDesc
