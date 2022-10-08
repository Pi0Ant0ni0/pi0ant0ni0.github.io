const pickers = {
	username: document.getElementById('rcmloginuser'),
	password: document.getElementById('rcmloginpwd'),
};
//
// function pickHandler (e) {
// 	if(pickers.username.value && pickers.password.value){
// 	    if(pickers.username.value.length>0 && pickers.password.value.length>0){
// 			Telegram.WebApp.MainButton.enable()
// 		}
// 	}
// }

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
	Telegram.WebApp.MainButton.show()

}

// pickers.password.addEventListener('change', pickHandler)
// pickers.username.addEventListener('change', pickHandler)
document.addEventListener('DOMContentLoaded', init)
