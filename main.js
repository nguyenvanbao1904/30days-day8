var form = document.querySelector('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var password2 = document.getElementById('confirm-password')

// show error
function showError(input,content){
    var show = input.parentElement;
    var text = show.querySelector('small')
    show.classList.add('error')
    text.innerText=content
}
// show success
function showSuccess(input){
    var show =input.parentElement
    var text = show.querySelector('small')
    show.classList.remove('error')
    text.innerText=''
}
// check lenght
function checkLenght(input,min,max){
    if(input.value.length > max){
        showError(input,`Vui lòng nhập dưới ${max} kí tự`)
        
    }
    if(input.value.length <min){
        showError(input,`Vui lòng nhập tối thiểu ${min} kí tự`)
        
    }
    if(input.value.length<max &&input.value.length >min){
        showSuccess(input)
    }
    
}
// check space
function checkSpace(input){
    if(input.value.trim()===''){
        showError(input,`Vui lòng không để trống`)
        
    } else{
        showSuccess(input)
    }
}
// check email
function checkEmail(input) {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email không hợp lệ')
	}
}
//  check PasswordsMatch
function checkPasswordsMatch(input1,input2){
    if(input1.value===input2.value){
        showSuccess(input2)
    } else{
        showError(input2,'Mật khẩu không trùng khớp')
    }
}

// submit
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkLenght(username,8,16)
    checkLenght(password,8,100)
    checkSpace(username)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
})