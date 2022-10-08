const pickers = {
	username: document.querySelector('#rcmloginuser'),
	password: document.querySelector('#rcmloginpwd'),
};

function pickHandler (e) {
	console.log("dati cambiati")
	if(pickers.username.value && pickers.password.value){
		console.log("i dati ci sono")
	    if(pickers.username.value.length>0 && pickers.password.value.length>0){
			console.log("sono non nulli")
	    	Telegram.WebApp.MainButton.show()
	    }
	}
}

function sendData () {
    var data=""
	console.log("sto per mandare i dati")
    if(pickers.username.value && pickers.password.value){
        data = pickers.username.value +" "+pickers.password.value
    }
	Telegram.WebApp.sendData(data)
	console.log("dati mandati")
}

function init () {
	console.log("inizializzando")
	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Accedi')
		.onClick(sendData)
}

pickers.username.addEventListener('change', pickHandler)
pickers.password.addEventListener('change', pickHandler)
document.addEventListener('DOMContentLoaded', init)
