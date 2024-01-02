import { useRouter } from 'next/router'

function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
      <p>{router.query.slug.join(', ')}</p>
    </div>
  )
}

export default BlogPostsPage