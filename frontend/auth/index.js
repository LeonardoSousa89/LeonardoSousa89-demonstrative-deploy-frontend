document.onclick = addEventListener('click',(e)=> e.preventDefault())
document.onload  = addEventListener('load', ( )=>{
    $('#alerting').hide(1)
    $('#empty').hide(1)
    $('#nofetch').hide(1)
})  
$('#button').click(function(){
    let admInput  = document.querySelector('#admin').value
    let passInput = document.querySelector('#pass').value 
	
	if(admInput  == 'mendes' && passInput == '1234' ||
	   admInput  == 'admin' && passInput == 'admin'){
	   document.location.href = 'auth/index.html'
	}else if(admInput  != 'mendes' || passInput != '1234' ||
	         admInput  != 'admin'  || passInput != 'admin'){
		alert('invalid data!')
		clear()
	}else if(admInput  == ''  || passInput == ''){
		alert('insert into all fields!')
		clear()
	}		
}
function clear(){
    let admInput  = document.querySelector('#admin')
    let passInput = document.querySelector('#pass')

    admInput.value  = ''
    passInput.value = ''
}
