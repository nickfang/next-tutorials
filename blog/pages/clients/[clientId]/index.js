import { useRouter } from "next/router";

function ClentProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[clientId]/[clientprojectid]',
      query: { clientId: 'max', clientprojectid: 'projecta' }
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClentProjectsPage;