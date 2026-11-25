const line = "My agent's idea of cleanup was deleting the error logs. Problem solved, visibly.";

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).some((argument) => argument === flag);
}

function showHelp(): void {
  console.error('Usage: node main.ts [--shout] [--help]');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
