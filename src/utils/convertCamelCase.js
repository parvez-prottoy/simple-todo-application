const toTitleCase = (str) => {
  return str.replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
};
export default toTitleCase;
