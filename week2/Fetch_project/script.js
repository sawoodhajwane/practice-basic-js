
const apikey='2252a3c1'
const title='x men'
fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`).then(response => response.json())
      .then(data => console.log(data))  
      .catch(error => console.error('Error:', error));
const btn= document.getElementById('search')


btn.addEventListener('click',()=>{
    const movie= document.getElementById("movietitle").value;
    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
    .then(response => response.json())    
    .then(data => console.log(data))  
    .catch(error => console.error("Error:", error));
})

const result= document.getElementById("result");
btn.addEventListener('click', async function movies() {
    
    const movien= document.getElementById("movietitle").value;
   
    let res=await fetch(`https://www.omdbapi.com/?t=${movien}&apikey=${apikey}`);
    let data= await res.json();
    if(data.Response==="True"){
        result.innerHTML=`<h3>The movie (${data.Title}) was released in (${data.Year})</h3>`
        result.innerHTML+=`<p> Check the console for More details</p>`
        console.log(data)
    }else{
        result.innerHTML=`<p>Movie Not Found</p>`
    }
    
        
    
});
