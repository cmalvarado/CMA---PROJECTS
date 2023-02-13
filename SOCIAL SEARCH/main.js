var form = document.getElementById("searchForm")


form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var remove= search.split(' ').join('')

    document.getElementById("result").innerHTML = ""


    fetch("https://api.github.com/users/"+remove)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${remove}" ><img src="${data.avatar_url}"/></a>
        `
    })

    

    fetch("https://instagram40.p.rapidapi.com/account-info?username="+remove)({
    "method": "GET",
	"headers": {
		"x-rapidapi-key": "61fec43279msh04d8696f71d13eap1c4796jsn1931b6bf67f4",
		"x-rapidapi-host": "instagram40.p.rapidapi.com"
	}
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.instagram.com/${remove}" ><img src="${data.avatar_url}"/></a>
        `
    })

    .fetch("https://twitter32.p.rapidapi.com/getProfile?username="+remove)({
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "61fec43279msh04d8696f71d13eap1c4796jsn1931b6bf67f4",
		"x-rapidapi-host": "twitter32.p.rapidapi.com"
	}
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.twitter.com/${remove}" ><img src="${data.avatar_url}"/></a>
        `
    })}
    )})

      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `No Common Data Found!`;
      app.appendChild(errorMessage);
    
  
  


})
