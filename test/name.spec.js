import getName from '../src/name'

describe('name', () => {
  test('get', () => {
    expect(getName()).toBe('gitlab-ci')
    expect(getName()).not.toBe('gitlab')
  })
})
