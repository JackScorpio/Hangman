// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error happened')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()

// })

const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getCountry = async (cc) => {
  const response = await fetch("//restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === cc);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?62127c0c3f876c");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};
