const { formatClientId } = require("./formatClientId");

describe("[Util] formatClientId", () => {
  it('should format string in correct way', () => {
    expect(formatClientId('<@123>')).toBe('123')
  })
});
