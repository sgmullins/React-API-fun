const boulder =
  '105722593,105908128,107094498,106070976,106464345,106403724,106385730,105722755,105725464,105811221,106390524,106413750,106032561,105722992,106022301,105880494,105755113,107950727,106068943';
const trad =
  '105924807,105912416,105836362,105732422,105748496,106138026,106154042,105872592,106008982,105845493,105717718,105732410,105860676,105884815,105748786,105872293,105717310,105862915,105839153,105863822';
const sport =
  '105717892,106286394,106566444,105989372,110356279,106132213,107177226,106759853,105789917,106282216,106333612,106207680,106333601,106045269,105910536,106586323,106011340,105749158,106811013,108043545';

export function fetchPopularClimbStyle(climbCategory) {
  if (climbCategory === 'Boulder') {
    climbCategory = boulder;
  }
  if (climbCategory === 'Sport') {
    climbCategory = sport;
  }
  if (climbCategory === 'Trad') {
    climbCategory = trad;
  }
  const endpoint = `https://www.mountainproject.com/data/get-routes?routeIds=${climbCategory}&key=106700300-69d63c2bbf7a526522a670c23cadce51`;
  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.routes) {
        throw new Error(data.message);
      }
      return data.routes;
    });
}

// export function fetchPopularClimbsByLocation(location) {
//   const endpoint = `http://www.mountainproject.com/data/`;
// }
