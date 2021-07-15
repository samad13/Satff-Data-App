const searchBar = document.querySelector("input")
const list = document.querySelector(".ul")
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase()
    const staff = list.querySelectorAll(".card")
    staff.forEach(function(staff){
        const tittle = staff.textContent;
        if(tittle.toLowerCase().indexOf(term)!= -1){
            staff.style.display = "inline" ;
        }else{
            staff.style.display =  "none";
        }
    })
});
  