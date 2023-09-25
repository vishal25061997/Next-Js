// our-domain.com/news/something-important

import { useRouter } from "next/router"

const somethingImportant = () => {
    const router = useRouter()
    const newsId = router.query.newsId
  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  )
}

export default somethingImportant
