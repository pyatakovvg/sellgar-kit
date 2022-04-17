
type TCallback = {
  [name: string]: any;
};


class Callback {
  private app: any;
  readonly callbacks: TCallback = {};

  constructor(app: any) {

    this.app = app;
  }

  get(name: string) {
    return this.callbacks[name];
  }

  set<N extends string, C>(name: N, cb: C) {
    this.callbacks[name] = cb;
  }

  exec<N extends string>(name: N) {
    const cb = this.get(name);
    cb(this.app);
  }
}

export default Callback;
