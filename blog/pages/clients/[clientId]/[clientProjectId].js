import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <p>{router.query.clientId}</p>
      <p>{router.query.clientProjectId}</p>
      <p>{router.query.test}</p>
    </div>
  );
}

export default SelectedClientProjectPage;