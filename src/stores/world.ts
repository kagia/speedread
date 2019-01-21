import { observable, computed } from 'mobx'

class World {
  @observable
  message = 'hello'

  setMessage (newMessage: string) {
    this.message = newMessage
  }

  @computed
  get sentence () {
    return `${this.message} world!`
  }
}

export default new World()