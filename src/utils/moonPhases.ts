
// Calcule la phase lunaire (0-29.5)
export const getMoonPhase = (date: Date): number => {
  const LUNAR_MONTH = 29.53058867; // Durée moyenne d'un cycle lunaire en jours
  const KNOWN_NEW_MOON = new Date("2000-01-06").getTime(); // Date de référence d'une nouvelle lune

  const timestamp = date.getTime();
  const days = (timestamp - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const phase = ((days % LUNAR_MONTH) / LUNAR_MONTH) * 29.5;
  
  return phase;
};

// Retourne l'icône appropriée basée sur la phase
export const getMoonIcon = (phase: number): string => {
  if (phase < 3.7) return "new-moon"; // Nouvelle lune
  if (phase < 11.1) return "waxing-crescent"; // Premier croissant
  if (phase < 14.8) return "first-quarter"; // Premier quartier
  if (phase < 22.2) return "waxing-gibbous"; // Lune gibbeuse croissante
  if (phase < 25.9) return "full-moon"; // Pleine lune
  if (phase < 29.5) return "waning-gibbous"; // Lune gibbeuse décroissante
  return "new-moon";
};
