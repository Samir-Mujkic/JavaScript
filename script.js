
document.querySelector('#fetchBtn').addEventsListener('click', e => {
	e.preventDefault();

	let id = document.querySelector('#userID').value;
 //Novi nacin (1)
let r = fetch('https://________________.io/Users/' + id)
.then(response => response.json()).then(data => {
	console.log(data);

	let podaci = document.querySelector('#podaci');
	podaci.innerHTML = `<p>${data['email']}</p>
	                     <p>${data['username']}</p>
	                     <p>${data['password']}</p> `;
}).catch(error =>) {
	alert('Prekinuta veza')
}
})

//stari nacin

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange() = function () {
	if(this.readyState == 4 && this.statzs == 200 ) {
		console.log(xhttp.responseText);
	}
}

xhttp.open('GET', 'URL__________/Users/', true);
xhttp.send();

//Novi nacin (2)

let request = fetch('url________.io/Users/').then(response => {

     return response.json();
}).then(data => {

}).catch(erros => {
	alert('Prekinuta veza');
})

	
