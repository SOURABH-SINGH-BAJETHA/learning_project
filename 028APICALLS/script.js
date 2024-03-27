
    
  const getData = async() =>{

    let name = document.querySelector(".name").value.toLowerCase();
    let type = document.querySelector(".type");
    type.innerText = "";
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(URL)
    let data =  await response.json();
    console.log(data);
    let len = data.types.length;
    for(let i = 0 ; i< len ; i++){
           console.log(data.types[i].type.name);
           type.innerText += `| ${data.types[i].type.name}  | `;
           
    }

    
  }









