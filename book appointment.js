let forms=document.querySelector(".forms")
forms.addEventListener('submit',(e)=>{
  e.preventDefault()
  let fname=document.querySelector("#Name")
  let email=document.querySelector("#Email")
  let phone=document.querySelector("#Phone")
  let area=document.querySelector(".area")
  let submit=0
  if(fname.value.length<3){
    alert("FIRST NAME SHOULD NOT LESS THAN 3 CHARACTERS")
    submit=1
  }
  if(lname.value.length<1){
    alert("SECOND NAME REQUIRED")
    submit=1
  }
  let r=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
   if(email.value.length<3 || (r.test(email.value)==false)){
        alert("PLEASE PROVIDE VALID EMAIL")
        submit=1
   }
   if(phone.value.length<10 || phone.value.length>10){
    alert("ENTER VALID PHONE NUMBER")
    submit=1
   }
   if(area.value.length<20){
    alert("MORE THAN 20 LETTERS REQUIRED")
    submit=1
   }
  
   if(submit==0){
    alert("FORM DATA SUBMITTED")
    window.location.href="index.html"
   }
   
   
  
})

