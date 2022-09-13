import in_json from './stuff.json' assert { type: 'json' };

export const Interpreter = class {
  constructor(jsono) {
    this.jsono = jsono;
    this.in_json = in_json;
  }
  get parsedJsono() {
    return JSON.parse(this.jsono)
  }

  asArray() {
    return Object.entries(JSON.parse(this.jsono))
  }
}