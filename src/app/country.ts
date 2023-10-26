export class Country {
  constructor(name = '', flag = '') {
    this.name = name;
    this.flag = flag;
    this.timeZones = [];
  }
  name: string
  flag: string
  timeZones: string[]
}