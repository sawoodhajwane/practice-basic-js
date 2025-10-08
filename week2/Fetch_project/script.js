
const apikey='2252a3c1'
const title='x men'
fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`).then(response => response.json())
      .then(data => console.log(data))  
      .catch(error => console.error('Error:', error));
const btn= document.getElementById('search')


btn.addEventListener('click',()=>{
    const movie= document.getElementById("movietitle").value;
    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
    .then(response => response.json())    .then(data => console.log(data))  
    .catch(error => console.error("Error:", error));
})

