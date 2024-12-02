var name=document.querySelector('.name');
var email=document.querySelector('.email');
var pass=document.querySelector('.pass');
var signUp=document.querySelector('.sign-up');
var productList = []  //[{}]  //new user
if (localStorage.getItem('products')) {
  productList = JSON.parse(localStorage.getItem('products'))  // old user
  
}
signUp.addEventListener('click',addProduct);
var nameRegex=/^[a-zA-Z0-9]$/
name.addEventListener('input', function () {
  validate(name, nameRegex);
});
email.addEventListener('input', function () {
  validate(email, nameRegex);
});
pass.addEventListener('input', function () {
  validate(pass, nameRegex);
});
//convert JSON to string  JSON.stringify()
//convert string to JSON  JSON.parse() 

function addProduct() {
  if(validate(name,nameRegex)&&validate(email,nameRegex)&&validate(pass,nameRegex))
    {
      var productObj = {
   
        Name: name.value,
        Email: email.value,
        Pass: pass.value,
       
      }
      productList.push(productObj) //product
    
      localStorage.setItem('products', JSON.stringify(productList))
      clearForm()
    }
  
  
}
function clearForm() {
  name.value = null;
  email.value = null;
  pass.value = null;
  
}

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.replace('d-block','d-none') 
      return true  
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.replace('d-none','d-block') 
      return false 
  }
}



