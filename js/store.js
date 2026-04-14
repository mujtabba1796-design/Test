export const store = {
  session: null,
  profile: null,
  students: [],
  teachers: [],
  applications: [],
  attendance: [],
  grades: []
};

export function setStore(key, value) {
  store[key] = value;
}