// src/cli/cli.ts
import * as process from "process";

console.log("CLI has started");
console.log("Arguments:", process.argv);

// Example function to display help
function displayHelp() {
  console.log(
    "Help: Use this CLI to create and manage PowerPoint presentations"
  );
}

// Check for arguments
if (process.argv.includes("--help")) {
  displayHelp();
}
