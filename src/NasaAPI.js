const NASA_KEY = process.env.REACT_APP_API_KEY;

// Expects a js Date, returns a string in YYYY-MM-DD format
function transformDateForAPIRequest(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}

export function getNASAPictures(startDate, endDate) {
  return new Promise(async (resolve, reject) => {
    try {
      const startDateFormatted = transformDateForAPIRequest(startDate);
      const endDateFormatted = transformDateForAPIRequest(endDate);

      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&start_date=${startDateFormatted}&end_date=${endDateFormatted}`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      });

      await fetch(url, {
        method: "GET",
        headers,
      }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.json());
        } else {
          reject(response.json());
        }
      }).then(res => {
        console.log("response: ", res);
      })
      .catch(err => {
        console.log("error:", err);
      });
    } catch (error) {
      reject(error);
    }
  });
}
