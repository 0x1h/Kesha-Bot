const { formatMessage } = require("./formateMessage");

describe("[Util] formatMessage", () => {
  it("should format text in correct value", () => {
    expect(formatMessage('hello there')).toBe('hello+there')
  });
});
