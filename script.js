function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let r = document.querySelector("#radius");
	//let btn = document.querySelector("#submit")
	let volume = document.querySelector("#volume")
    let V = (4/3)*(Math.PI*(r.value**3))
		volume.value=V.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
