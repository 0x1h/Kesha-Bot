const { formatAvatarUrl } = require("./formatAvatarUrl");


describe('[Util] formatAvatarUrl', () => { 
  it('should format url in correct way', () => {
    expect(formatAvatarUrl('.webp')).toBe('.png')
  })
 })