import React from "react";
import Repo from "../../../components/Repo";

const RepoDetailPage = ({ params }) => {
  const { name } = params;

  return (
    <div className="card">
      <Repo name={name} />
    </div>
  );
};

export default RepoDetailPage;
