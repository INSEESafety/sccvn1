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
  generalCheck: string;
  generalCheckR: string;
  generalCheckP: string;
  generalCheckA: string;
  generalCheckF: string;
  valveCheck: string;
  valveCheckR: string;
  valveCheckP: string;
  valveCheckA: string;
  valveCheckF: string;
  capCheck: string;
  capCheckR: string;
  capCheckP: string;
  capCheckA: string;
  capCheckF: string;
  hydrantHeadCheck: string;
  hydrantHeadCheckR: string;
  hydrantHeadCheckP: string;
  hydrantHeadCheckA: string;
  hydrantHeadCheckF: string;
  inspectionTagCheck: string;
  inspectionTagCheckR: string;
  inspectionTagCheckP: string;
  inspectionTagCheckA: string;
  inspectionTagCheckF: string;
  hydrantBodyCheck: string;
  hydrantBodyCheckR: string;
  hydrantBodyCheckP: string;
  hydrantBodyCheckA: string;
  hydrantBodyCheckF: string;
  waterPressureCheck: string;
  waterPressureCheckR: string;
  waterPressureCheckP: string;
  waterPressureCheckA: string;
  waterPressureCheckF: string;
  fireHoseCheck: string;
  fireHoseCheckR: string;
  fireHoseCheckP: string;
  fireHoseCheckA: string;
  fireHoseCheckF: string;
  fireNozzleCheck: string;
  fireNozzleCheckR: string;
  fireNozzleCheckP: string;
  fireNozzleCheckA: string;
  fireNozzleCheckF: string;
  hoseCabinetCheck: string;
  hoseCabinetCheckR: string;
  hoseCabinetCheckP: string;
  hoseCabinetCheckA: string;
  hoseCabinetCheckF: string;
  otherChecks: string;
  otherChecksR: string;
  otherChecksP: string;
  otherChecksA: string;
  otherChecksF: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
  tag?: string;
  status?: string;
  collection?: string;
}
