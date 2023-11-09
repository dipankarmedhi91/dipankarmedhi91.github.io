export const getExperience = () => {
  const startDate = new Date("2014-10-17");
  const totalMonths =
    Math.abs(new Date() - startDate) / (1000 * 60 * 60 * 24 * 30);
  const years = Math.floor(totalMonths / 12);
  const months = Math.floor(totalMonths % 12) - 1;
  return `${years} years ${
    months > 0 ? `and ${months} month${months > 1 ? "s" : ""}` : ""
  }`;
};
