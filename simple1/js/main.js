
const getHoroscope = () => {
  let sign = document.getElementById('sign').value
  let day = document.getElementById('day').value

  const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(data => {
    const date = data.current_date;
    console.log(date);
    console.log(data);
    let text = data.description
    document.querySelector('h3').innerText = `${text}`

  })
    .catch(err => {
        console.log(`error ${err}`)
  })
}

document.querySelector("#button").addEventListener("click", getHoroscope);
