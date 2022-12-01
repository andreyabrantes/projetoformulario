function validateForm(){
  // console.log(document.querySelectorAll("[required]"));
  document.querySelectorAll("[required]").forEach((element) => {
    console.log(element.value);
    if ( element.value.trim().length <= 0 ){
      // alert("Campo " + element.name + " vazio");

      element.setAttribute("style", "border: none; ");
      element.setAttribute("style" , "border: 2px solid red; ");
      element.setAttribute("bordered" , "1");
    }
  });
  
  document.querySelectorAll("[bordered='1']").forEach((element) => {
      element.addEventListener("mouseover", clearForm );
  });
}
function clearForm(event){
 event.target.setAttribute("style", "border: none; ");
 event.target.removeAttribute("bordered");
 event.target.removeEventListener("mouseover", clearForm);
}
document.addEventListener("DOMContentLoaded", function () {

  const createbtn = document.getElementById("formsend");
  createbtn.addEventListener("click", validateForm);
});