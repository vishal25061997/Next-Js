// our-domain.com/news
 import Link from "next/link"
const newsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/vishalyadav">nextjs course</Link></li>
        <li><Link href="https://www.youtube.com">Youtube</Link></li>
      </ul>
    </div>
  )
}

export default newsPage
