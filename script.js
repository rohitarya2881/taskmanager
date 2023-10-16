const addform = document.querySelector("#additems");
const search = document.querySelector(".search");

var noofli=0;
let stringnofli ="";


//li creation p creation



addform.addEventListener("submit", event => {
    function addList(value)
    {  
        const TaskList = document.querySelector(".tasklist");
        const Listitem = document.querySelector(".listitem");
        const li = document.createElement("li");

        const p =  document.createElement("p");
        const node = document.createTextNode(value);
        p.appendChild(node);
        

        li.appendChild(p);
        li.innerHTML+='<button class="deletebutton"><i class="fa fa-trash" aria-hidden="true" class="icons" id="delete"></i></button>';

        
    
        Listitem.appendChild(li);
        noofli+=1;
        console.log(noofli)
       
        spanmessage.innerHTML = "It has"+" "+ noofli + " " + "items";


    }
    event.preventDefault();
    const filledData = addform.filledtext.value; 
    const TaskList = document.querySelector(".tasklist");
    const List = document.querySelector("#list");
    addList(filledData);
    console.log(TaskList);
    addform.filledtext.value="";


})






//bottom no of items dynamically added

const Listitem = document.querySelector(".listitem");


const mainframe = document.querySelector(".mainframe");
const taskclear = document.querySelector(".taskclear");

const divmessage = document.createElement("div");
divmessage.setAttribute("class","message")
const spanmessage = document.createElement("span");

stringnofli = String(noofli);
console.log(`stringofli ${stringnofli}`)
spanmessage.innerHTML = "It has"+" "+ stringnofli + " " + "items";
const buttonclear = document.createElement("button");
buttonclear.innerText='clear';
buttonclear.setAttribute("class","clear");
divmessage.appendChild(spanmessage);
divmessage.appendChild(buttonclear)
taskclear.appendChild(divmessage)



// delete 
const Listitems = document.querySelector(".listitem");
Listitems.addEventListener("click",event=>
  { 
     console.log(event.target)
    if(event.target.classList.contains("fa"))
    {
      event.target.parentElement.parentElement.remove();
      noofli-=1;
      spanmessage.innerHTML = "It has"+" "+ noofli + " " + "items";


    }
  }
  
  
  )

  // search bar , filter

   search.addEventListener("keyup",event=>
  {
    const typevalue=search.task.value.trim();
    Filterlist(typevalue);
 
   })



  // reset dearch bar input
   search.addEventListener("click",event=>
 
   {
    if(event.target.classList.contains("resets"))
    {
      search.reset()
      const typevalue=search.task.value.trim();
      Filterlist(typevalue);
    }
   })


// filter list function or filtering

 function Filterlist(value)
 {           const listitem = document.querySelector(".listitem");
          const listitems = listitem.children;
        const listarray= Array.from(listitems);
        // console.log(listarray)
        listarray.filter(lis=>
          {  console.log(lis)
          return !lis.textContent.includes(value)
          }).forEach(Element=>
            Element.classList.add("hide")
            )
          
            Array.from(listitems).
            // console.log(listarray)
            filter(lis=>
              {
              return lis.textContent.includes(value)
              }).forEach(Element=>
                Element.classList.remove("hide")
                )

 }



 //
 const clearbutton = document.querySelector(".taskclear");
 clearbutton.addEventListener("click",event=>
   { 
          if(event.target.classList.contains("clear")) 
          {
        const listitem = document.querySelector(".listitem");
          const listitems = listitem.children;
        const listarray= Array.from(listitems);
        listarray.forEach(Element=>
          {
            Element.remove();
            noofli-=1;
               spanmessage.innerHTML = "It has"+" "+ noofli + " " + "items";
          })
          }
      
 
   })