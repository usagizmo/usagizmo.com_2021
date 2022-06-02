import { VFC } from 'react'

type LikeItem = {
  id: string
  name: string
  url: string | null
}

type LikeSection = {
  id: string
  name: string
  url: string | null
  order: number | null
  like_items: LikeItem[]
}

interface Props {
  likeSections: LikeSection[]
}

const LikesContents: VFC<Props> = ({ likeSections }) => {
  return (
    <>
      {likeSections.map((section, i) => (
        <div key={i}>
          <h3 className="c-sub2title">
            {section.url ? (
              <a
                className="u-text-link"
                href={section.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.name}
              </a>
            ) : (
              section.name
            )}
          </h3>
          <ul className="c-inline-list --small">
            {section.like_items.map((item, j) => (
              <li key={j}>
                {item.url ? (
                  <a
                    className="u-text-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default LikesContents
