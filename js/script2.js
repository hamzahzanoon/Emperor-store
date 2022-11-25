let sidebar = document.querySelector(".sidebar");
let faBars = document.querySelector(".fa-slack");
let text = document.querySelector(".text");
let contaner = document.querySelector(".contaner");


   faBars.addEventListener("click" , () => {
      sidebar.classList.toggle("close")
      text.classList.toggle("show");
      contaner.classList.toggle("contaners"); 
   })