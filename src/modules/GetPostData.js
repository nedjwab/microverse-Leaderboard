
//fetching data  (getdata)
export async function getData() {
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IP1tBW9ujOB9qwXurZoA/scores/';
    const request = new Request(requestURL);
    const response = await fetch(request);
    console.log(response);
    const scoresText = await response.text(); 
    const scores= JSON.parse(scoresText);
    displayData(scores); 
  }

  //posting data
  export async function postData(obj) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IP1tBW9ujOB9qwXurZoA/scores/', {
        method:'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body :JSON.stringify({
            user:obj.name,
            score:obj.score
        })
    });
  }
