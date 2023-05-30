import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/4nth0ny1/repos?page=1&per_page=100",
    {
      next: { revalidate: 60 },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second for the loading.jsx spinner to show

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  //   console.log(repos[0]); // since this is a server component, this console.log() will not show up in the client (browser), it will show up in the terminal.

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposPage;
