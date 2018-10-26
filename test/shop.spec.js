import Shop from '../src/shop'

describe('shop', () => {
  test('status', () => {
    const shop = new Shop;
    expect(shop.getStatus()).toBe(false)
    shop.setStatus(true)
    expect(shop.getStatus()).not.toBe(false)
    expect(shop.getStatus()).toBe(true)
  })
})
