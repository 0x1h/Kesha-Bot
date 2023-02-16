const getNumber = (embed) => {
  const { title } = embed;

  const number = title.split("#")[1].split('#')[0].replace(')', '')

  return Number(number);
};

module.exports = { getNumber };
