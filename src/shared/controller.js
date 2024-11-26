/**
 * @typedef {import('./viewBase.js').default} View
 */
export default class Controller {
  /** @type {View} */
  #view

  /**
   * @param {{view: View}} deps
   */
  constructor({ view }) {
    this.#view = view
  }

  static init(deps) {
    const controller = new Controller(deps)
    controller.#init()
    return controller
  }

  #init() {
    const initialData = [
      { name: 'German Gambarte', age: 26, email: 'german@german.com' },
    ]
    this.#view.render(initialData)
  }
}
