async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/4nth0ny1/repos");
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  // console.log(repos); // since this is a server component, this console.log() will not show up in the client (browser), it will show up in the terminal.
  return (
    <div>
      <h2>ReposPage</h2>
      {repos[0].name}
    </div>
  );
};

export default ReposPage;
