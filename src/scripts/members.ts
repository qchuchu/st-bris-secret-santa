const CHURET_MEMBERS = ["Quentin", "Rémy", "Roxane", "Olivier", "Virginie"];
const LACOSTE_PARENT_MEMBERS = ["Marc", "Florence", "Charlotte"];
const LACOSTE_DELPHINE_MEMBERS = ["Thomas", "Delphine"];
const LACOSTE_BAPTISTE_MEMBERS = ["Baptiste", "Clémence"];
const LACOSTE_MEMBERS = [
  ...LACOSTE_PARENT_MEMBERS,
  ...LACOSTE_DELPHINE_MEMBERS,
  ...LACOSTE_BAPTISTE_MEMBERS,
];
const BETIN_GRANDFATHER_MEMBERS = ["Mamychèle", "Papy Pierre"];
const BETIN_MEMBERS = ["Nicolas", "Alexandra", "Clara", "Hugo"];
const DUBAR_PARENT_MEMBERS = ["Carole", "Michel"];
const DUBAR_MARGAUX_MEMBERS = ["Margaux", "Mathias"];
const DUBAR_JULIEN_MEMBERS = ["Julien", "Elise"];
const DUBAR_MEMBERS = [
  ...DUBAR_PARENT_MEMBERS,
  ...DUBAR_MARGAUX_MEMBERS,
  ...DUBAR_JULIEN_MEMBERS,
];

export const FAMILY_GROUPS = [
  CHURET_MEMBERS,
  LACOSTE_MEMBERS,
  BETIN_GRANDFATHER_MEMBERS,
  BETIN_MEMBERS,
  DUBAR_MEMBERS,
];

export const members = FAMILY_GROUPS.flat();
