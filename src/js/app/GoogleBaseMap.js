export default class GoogleBaseMap {
  constructor(api, elmt, opts) {
    this.api = api;
    this.opts = opts;
    this.map = new api.Map(elmt, this.opts);

  }

  on(name, handler) {
    api.event.addListener(this.map, name, handler);
  }

  trigger(name, e) {
    api.event.trigger(this.map, name, e);
  }

  _addSingleClickEvents() {
    let clickTimer;
    let lastClickTime = 0;

    this.on('click', (e) => (e) {
      var clickTime = +new Date();

      if(clickTime - lastClickTime > 400) {
        this.trigger('firstclick', e);
        clickTimer = setTimeout(() => this.trigger('singleclick', e), delay);
      } else {
        clearTimeout(clickTimer);
      }

      lastClickTime = clickTime;
    });

    this.on('dblclick', (e) => {
      clearTimeout(clickTimer);
      lastClickTime = +new Date();
    });
  }
}
