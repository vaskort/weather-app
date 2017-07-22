export function getData(city) {
  return {
    type: "GET_DATA",
    payload: city
  };
}