//metodos provisórios
$('#button').click(function(){
    let admInput  = document.querySelector('#admin').value
    let passInput = document.querySelector('#pass').value 
	
	if(admInput  == 'mendes' && passInput == '1234' ||
	   admInput  == 'admin' && passInput == 'admin'){
	   document.location.href = 'auth/index.html'
	}else if(admInput  != 'mendes' || passInput != '1234' ||
	         admInput  != 'admin'  || passInput != 'admin'){
		alert('invalid data!')
	}else if(admInput  == ''  || passInput == ''){
		alert('insert into all field values!')
	}		
}	

function clear(){
    let admInput  = document.querySelector('#admin')
    let passInput = document.querySelector('#pass')

    admInput.value  = ''
    passInput.value = ''
}
