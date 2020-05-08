const getMetaDesc = (metaDescription: string, intro: string) => {
  if (metaDescription == null) return null

  const MAX_LENGTH = 140

  if (!metaDescription && intro.length > MAX_LENGTH) {
    intro = intro.substr(0, MAX_LENGTH) + '...'
  }

  return metaDescription || intro
}

export default getMetaDesc
