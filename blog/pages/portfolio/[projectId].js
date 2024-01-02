import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The Portfolio Project Page for {router.query.projectId} </h1>
    </div>
  )
}

export default PortfolioProjectPage;