import fs from "fs";
import path from "path";
import { members } from "./members.ts";

type SecretSantaMap = {
  [key: string]: string;
};

function generateRandomSecretSanta(members: string[]): SecretSantaMap | null {
  const shuffledMembers = [...members];
  let currentIndex = shuffledMembers.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledMembers[currentIndex], shuffledMembers[randomIndex]] = [
      shuffledMembers[randomIndex],
      shuffledMembers[currentIndex],
    ];
  }

  // Check if any member is assigned to themselves
  for (let i = 0; i < members.length; i++) {
    if (shuffledMembers[i] === members[i]) {
      // If someone is assigned to themselves, retry the process
      return generateRandomSecretSanta(members);
    }
  }

  const secretSantaCombination: SecretSantaMap = {};
  for (let i = 0; i < members.length; i++) {
    secretSantaCombination[members[i]] = shuffledMembers[i];
  }

  return secretSantaCombination;
}

const secretSantaCombination = generateRandomSecretSanta(members);

if (secretSantaCombination) {
  const filePath = path.join(".", "src", "mapping", "secretSantaMapping.ts");
  const fileContent = `export const secretSantaMapping = ${JSON.stringify(
    secretSantaCombination,
    null,
    2
  )};`;

  fs.writeFileSync(filePath, fileContent);

  console.log(`Secret Santa mapping has been written to ${filePath}`);
} else {
  console.log(
    "Unable to generate valid Secret Santa combinations. Please try again."
  );
}
