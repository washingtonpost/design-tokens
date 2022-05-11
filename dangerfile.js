const { danger, warn } = require("danger");
const configureRules = require("@washingtonpost/danger").default; // default required due to module format

const jiraProjects = ["WPDS"];

module.exports.default = async () => {
  const branchName = danger.github.pr.head.label.replace("washingtonpost:", "");
  const baseName = danger.github.pr.base.label.replace("washingtonpost:", "");

  const repo = await configureRules({
    appFiles: "packages/**/*.{js,json,svg}",
    testFiles: "**/*.{test,spec,e2e,stories}.*",
    packageJson: "package.json",
  });

  // Generate links for any ticket numbers referenced, warn if none
  repo.listTicketNumbers(warn, jiraProjects);
  // Warn if there are no tests, congratulate if there are
  repo.shouldHaveTests(warn, true);
  // Apply labels automatically based on changesets
  repo.addLabels({
    "package-lock.json": { name: "dependencies", color: "8732bc" },
  });

  // For releases, generate a release log based on merge commit history
  // @example https://github.com/WPMedia/subs-fe-my-post/pull/589#issuecomment-829234832
  if (branchName === "dev" && baseName === "main") {
    repo.generateReleaseLog(jiraProjects);
  }
};
