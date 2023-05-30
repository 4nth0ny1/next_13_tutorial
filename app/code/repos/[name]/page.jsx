import React from "react";
import Repo from "../../../components/Repo";
import Link from "next/link";
import RepoDirs from "../../../components/RepoDirs";
import { Suspense } from "react";

const RepoDetailPage = ({ params }) => {
  const { name } = params;

  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoDetailPage;
