let instance = null
export const getInstance = () => {
  return instance
}

export default class Shop {
  constructor() {
    this.status = false
    instance = this
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
