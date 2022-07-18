import Link from 'next/link'


export default function KindOfExpertiseMenu(props) {
  const links = props.data.list.link.items

  return (
    <ul>
      {links.map(link => (
        <li key={link.sys.id}>
          <Link href={link.url}>
            <a title={link.title}>
              {link.text}
            </a>
          </Link>
          <p>
            {link.description}
          </p>
        </li>
      ))}
    </ul>
  )
}