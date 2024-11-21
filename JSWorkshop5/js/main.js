let userNameInput=document.querySelector("#userName");
userNameInput.value=localStorage.getItem("userName");

userNameInput.addEventListener("keyup",(e)=>{
  localStorage.setItem("userName",userNameInput.value);
})
let visits;
let previousVisitsCount = localStorage.getItem('visits');
if (previousVisitsCount!=null){
   visits=Number(previousVisitsCount)+1;
}
else{
  visits=1;
}
localStorage.setItem("visits",visits);
let visitsCountEle=document.querySelector("#visitsCount");
visitsCountEle.textContent=`visits= ${visits}`;
