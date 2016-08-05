function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w("<html lang=\"en\"><head><meta charset=\"UTF-8\"><title>title</title></head><body><h1>Marko Demo</h1><h2>Hello, " +
      escapeXml(data.name) +
      "</h2>");

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li><span style=\"color: " +
          escapeXmlAttr(color) +
          "\">" +
          escapeXml(color) +
          "</span></li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>There are no colors!</div>");
    }

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
