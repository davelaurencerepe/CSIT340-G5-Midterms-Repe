import { useState } from "react";

function Contribute({ issue }) {
  const [contributors, setContributors] = useState(0);

  const openIssues = Math.max(0, issue - contributors);

  function handleContribute() {
    setContributors(contributors + 1);
  }

  function handleClear() {
    setContributors(0);
  }

  return (
    <section className="flex flex-col items-center gap-4 pb-8">
      <h3 className="text-3xl font-bold">Contribute</h3>
      <div className="flex gap-4">
        <a
          href="https://github.com/davelaurencerepe/CSIT340-G5-Midterms-Repe"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleContribute}
        >
          GitHub
        </a>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <p className="text-xl text-[#000000]">Contributors: {contributors}</p>
      <p className="text-xl text-[#000000]">Open issues: {openIssues}</p>
    </section>
  );
}

export default Contribute;