const httpRegex = (url) => {
  const httpRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  if(httpRegex.test(url)){
    return url
  }

  return null
};

module.exports = { httpRegex };
