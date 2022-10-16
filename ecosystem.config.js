module.exports = {
  apps : [{
    name   : "limit worker",
    script : "index.js",
    args   : "limit"
  },{
    name   : "rotate worker",
    script : "index.js",
    args   : "rotate"
  }]
}