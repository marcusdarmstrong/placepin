export default class GoogleBaseMap {
  constructor(api, elmt, opts) {
    this.api = api;
    this.opts = opts;
    this.map = new api.Map(elmt, this.opts);
    this._addSingleClickEvents();
  }

  on(name, handler) {
    this.api.event.addListener(this.map, name, handler);
  }

  trigger(name, e) {
    this.api.event.trigger(this.map, name, e);
  }

  addMarker(lat, lng) {
    return !!(new this.api.Marker({
      position: new this.api.LatLng(lat(), lng()),
      map: this.map,
    }));
  }

  _addSingleClickEvents() {
    let clickTimer;
    let lastClickTime = 0;

    this.on('click', (e) => {
      const delay = 400;
      const clickTime = +new Date();

      if (clickTime - lastClickTime > delay) {
        this.trigger('firstclick', e);
        clickTimer = setTimeout(() => this.trigger('singleclick', e), delay);
      } else {
        clearTimeout(clickTimer);
      }

      lastClickTime = clickTime;
    });

    this.on('dblclick', () => {
      clearTimeout(clickTimer);
      lastClickTime = +new Date();
    });
  }
}
