const parseStringToHTML = (str) => {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/html");
};

module.exports = { parseStringToHTML };
