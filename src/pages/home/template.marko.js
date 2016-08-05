function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>title</title></head><body><h1>Marko Demo</h1><h2>Hello, " +
      escapeXml(data.name) +
      "</h2></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
