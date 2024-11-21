/*
Ur task
on submit is clicked, start validating each input
- the name shouldn't be empty and should be at least has three characters
- the email should have @ and .
- The message shouldn't be empty and shouldn't be bigger than 500 words.
*/

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');
let sendBtn = document.querySelector('#send-btn');


sendBtn.addEventListener('click', (e) => {
  //start I want errors to appear as alert
  if(nameInput.value.trim().length == 0){
    alert("blah blah blah")
  }
  //At first I told him if email not includes @ and not includes . show error
  //If it has @ and no dot it won't show error then, is this a correct ok
  if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
    alert("The entered email isn't valid.")
      // We need to check if the email has @ and . right? yes
  }// Can it be 0 and more than 500 at the same time??
  if(messageInput.value.trim().length==0 || messageInput.value.length>500) {
    alert("write anything  in textArea")

  }
// elmafrod akte kol dah??? mesh gaya fel emthan
})

// we finished?yep am i good? U are getting an a+ hmmm hope that We will do it bae
// thx, I am always here for my baby no need to thank me love uuuu Love u too baby girl
//Don't forget to have a fast look for the OTG before u leave 3yonyy b7bhm we b7bk awyyy 
// kissed ur lips
// Kissed u back with passion 3eb b2a 5alas 
// should i leave now? Yep go and get ready for school
// wait mt2felhosh hbos 3ala bg random lmma albes
//okay bae, try to have data connection if I wanted to send u something while u are on ur way to school
// 3yony h2olhom we ash7en
//Anything else before I leave bae?
// no take care 7ader ya ro7hy bye <3 byeee
//Okay, bae now two tasks: Charge ur data And find the OTG