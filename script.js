const button = document.querySelector("#clickme");
const paragraph= document.querySelector("#showinfo");

async function clickmefun(){
	try{
		const res1 = await fetch("https://swapi.co/api/planets/3");
		const res2 = await res1.json();
		// paragraph.appendChild(document.createTextNode('Name of the planet: ' + res2.name));
		paragraph.append('Name of the planet: ' + res2.name);
	} catch(err){
		console.log(err);
	}
	

}

button.addEventListener('click',clickmefun);
