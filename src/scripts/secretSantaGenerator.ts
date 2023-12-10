import fs from "fs";
import path from "path";
import { members, FAMILY_GROUPS } from "./members.ts";

type SecretSantaMap = {
  [key: string]: string;
};

function generateRandomSecretSanta(members: string[]): SecretSantaMap | null {
  const shuffledMembers = [...members];
  let currentIndex = shuffledMembers.length;

  // Fisher-Yates shuffle algorithm
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledMembers[currentIndex], shuffledMembers[randomIndex]] = [
      shuffledMembers[randomIndex],
      shuffledMembers[currentIndex],
    ];
  }

  // Check constraints
  for (let i = 0; i < members.length; i++) {
    const sender = members[i];
    const receiver = shuffledMembers[i];

    // Check if someone is assigned to themselves
    if (sender === receiver) {
      return generateRandomSecretSanta(members); // Retry the process
    }

    // Check if members from the same group are picking each other
    const senderGroup = FAMILY_GROUPS.find((group) => group.includes(sender));
    const receiverGroup = FAMILY_GROUPS.find((group) =>
      group.includes(receiver)
    );

    if (senderGroup === receiverGroup) {
      return generateRandomSecretSanta(members); // Retry the process
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
