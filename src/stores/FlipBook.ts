import { observable, computed, action, autorun } from "mobx";
import { sampleText } from '../data'

export class FlipBook {
  @observable
  wordsPerMinute: number = 200

  @observable
  source: string = sampleText

  @observable
  _cursor: number = 0

  _intervalHandle?: number

  constructor() {
    autorun(() => {
      if (this._intervalHandle) {
        window.clearInterval(this._intervalHandle)
        this._intervalHandle = undefined
      }

      if (this.corpus.length === 0) {
        this.wordsPerMinute = 0
      }

      if (this._shouldFlip) {
        this._intervalHandle = window.setInterval(() => this.flip(), this._delay)
      }
    })
  }

  get _delay(): number {
    return  60000/this.wordsPerMinute
  }

  @computed
  get word() {
    return this.corpus[this._cursor]
  }

  @computed
  get corpus() {
    const result = this.source.split(' ')
    if (result.length === 1 && result[0] === '') {
      return []
    }

    return result
  }

  @computed
  get _shouldFlip(): boolean {
    return this.wordsPerMinute !== 0
  }

  @action
  flip() {
    const { corpus } = this;

    if (corpus.length === 0) {
      return
    } else if (this._cursor < corpus.length - 1) {
      this._cursor += 1
    } else {
      this._cursor = 0
    }
  }

  @action
  useSampleText() {
    this.source = sampleText
  }
}