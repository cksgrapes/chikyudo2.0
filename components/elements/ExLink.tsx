import Link from 'next/link'

type ExLinkProps = {
  item: {
    name: string
    path:
      | string
      | {
          href: string
          as: string
        }
  }
}

const ExLink = ({ item }: ExLinkProps) => {
  let src: React.ReactElement
  const { name, path } = item

  if (typeof path === 'object') {
    src = (
      <Link href={path.href} as={path.as}>
        <a>{name}</a>
      </Link>
    )
  } else {
    if (path.charAt(0) === '/') {
      src = (
        <Link href={path}>
          <a>{name}</a>
        </Link>
      )
    } else {
      src = (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      )
    }
  }

  return src
}

export default ExLink
