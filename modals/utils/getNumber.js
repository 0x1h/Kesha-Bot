const getNumber = (embed) => {
  const {title} = embed

  const number  = title.split("#")[1].slice(0,2)

  return Number(number)
};

module.exports = { getNumber };
