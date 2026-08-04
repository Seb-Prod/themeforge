import { createInterface } from "node:readline/promises";
import { spawn } from "node:child_process";

/**
 * Exécute une commande pnpm et attend sa fin.
 * Rejette si le process se termine avec un code d'erreur.
 */
function run(script: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", [script], { stdio: "inherit", shell: true });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`"${script}" a échoué (code ${code})`));
    });
  });
}

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  const answer = (
    await rl.question(
      "Que veux-tu lancer ? (1) test  (2) typecheck  (3) les deux : ",
    )
  ).trim();

  rl.close();

  try {
    if (answer === "1") {
      await run("test");
    } else if (answer === "2") {
      await run("typecheck");
    } else if (answer === "3") {
      await run("test");
      await run("typecheck");
    } else {
      console.log("Choix invalide.");
      process.exit(1);
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();
