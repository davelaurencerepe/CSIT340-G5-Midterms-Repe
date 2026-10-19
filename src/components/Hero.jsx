import { useState } from "react";
import Intro from "./Intro";
import Controls from "./Controls";
import Stats from "./Stats";
import Contribute from "./Contribute";

function Hero() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <>
      <Intro author="DAVE LAURENCE R. REPE" />
      <Controls
        onStar={handleStar}
        onDownload={handleDownload}
        onReport={handleReport}
        onReset={handleReset}
      />
      <Stats stars={stars} downloads={downloads} issues={issues} />
      <Contribute issue={issues} />
    </>
  );
}

export default Hero;