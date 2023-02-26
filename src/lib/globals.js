export const LOCATIONS = [
  {label: 'UIUC', key: 0, value: "uiuc"},
  {label: 'Purdue', key: 1, value: "purdue"},
  {label: 'IU-Bloomington', key: 2, value: "iu-bloom"},
  {label: 'UIC', key: 3, value: "uic"},
  {label: 'WashU', key: 4, value: "washu"},
];

export function locationFromID(id) {
  for (let location of LOCATIONS) {
    if (location.key === id) return location;
  }
}

export function locationFromLabel(label) {
  for (let location of LOCATIONS) {
    if (location.label === id) return location;
  }
}
