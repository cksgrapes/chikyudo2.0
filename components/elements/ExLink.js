import Link from 'next/link'

const ExLink = (item) => {
  let src

  if (/http|mailto/.test(item.path)) {
    src = (
      <a href={item.path} target="_blank" rel="noopener">
        {item.name}
      </a>
    )
  } else {
    src = (
      <Link href={item.path.href || item.path} as={item.path.as}>
        <a>{item.name}</a>
      </Link>
    )
  }

  return src
}

export default ExLink
