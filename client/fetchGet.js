fetch('http://api.website.local/fetchdata')
    .then(response => response.json())
    .then(json => console.log(json));