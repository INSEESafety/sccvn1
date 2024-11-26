export interface Data {
  _id: string;
  id: string;
  site: string;
  kind: string;
  area: string;
  swl: string;
  operateBy: string;
  latestInspection: string;
  nextInspection: string;
  installDiameter: string;
  actualDiameter: string;
  tolerance: string;
  result: string;
  internalInspector: string;
  remarks: string;
  owner: string;
  no: string;
  etype: string;
  esite: string;
  place: string;
  location: string;
  type: string;
  cableDiameter: string;
  email: string;
  name: string;
  defect: string;
  trans: Item[];
}

//Change only these Items
export interface Item {
  _id: string;
  id: string;
  date: string;
  email: string;
  inspector: string;
  responder?: string;
  horn: string;
  hornR: string;
  hornP: string;
  hornA: string;
  hornF: string;
  lights: string;
  lightsR: string;
  lightsP: string;
  lightsA: string;
  lightsF: string;
  isolator: string;
  isolatorR: string;
  isolatorP: string;
  isolatorA: string;
  isolatorF: string;
  limitSwitch: string;
  limitSwitchR: string;
  limitSwitchP: string;
  limitSwitchA: string;
  limitSwitchF: string;
  loadLimit: string;
  loadLimitR: string;
  loadLimitP: string;
  loadLimitA: string;
  loadLimitF: string;
  safetyLatch: string;
  safetyLatchR: string;
  safetyLatchP: string;
  safetyLatchA: string;
  safetyLatchF: string;
  loadChart: string;
  loadChartR: string;
  loadChartP: string;
  loadChartA: string;
  loadChartF: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
}
