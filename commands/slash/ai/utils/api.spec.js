const { api } = require("./api");

describe("[Util] api", () => {
  it("should format correct string", () => {
    expect(api("hello+test")).toBe(
      "https://api.popcat.xyz/chatbot?msg=hello+test&owner=callmenikk&botname=Kesha"
    );
  });
});
