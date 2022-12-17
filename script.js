// show the condition match using JS

let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('pswrd')
let button = document.getElementById('btn')
let msgDiv = document.getElementById('invalid1')
let msgDiv2 = document.getElementById('invalid2')

emailInput.addEventListener('keypress', validate1 )
passwordInput.addEventListener('keypress', validate2)




function myFunction () {
  let text;
  if(confirm("do you want to continue?") == true)
  {
    alert("successful signup!")
  }
  else{
    document.getElementById('myForm').reset()
  }

}


function validate1 () {
  let email = emailInput.value;

  if(email.length>2 && email.includes("@") && email.includes("."))
  {
    msgDiv.innerText = ""
 
  }
else{

  msgDiv.innerText = "Make sure email is more than 3 character and has @ a ."
  msgDiv.style.color = 'red'
}

}



function validate2 () {
  let password = passwordInput.value;

  if(password.length > 7)
  {
    msgDiv2.innerText = "All good to go!"
    msgDiv2.style.color = 'green'

  }
  else{
    msgDiv2.innerText = "Make sure password is more than 8 characters"
    msgDiv2.style.color = 'red'
  }
}


