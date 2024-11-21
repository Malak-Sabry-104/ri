let books = [
  {
    title: "To Kill a Mockingbird",
    description:
      "A novel about the moral growth of a young girl in the racially charged South.",
    coverImg: "img/book-1.jpg",
    price: "$12.99",
  },
  {
    title: "1984",
    description:
      "A dystopian novel set in a totalitarian society under constant surveillance.",
    coverImg: "img/book-2.jpg",
    price: "$9.99",
  },
  {
    title: "Pride and Prejudice",
    description:
      "A classic romance novel exploring the social pressures of marriage in the 19th century.",
    coverImg: "img/book-3.jpg",
    price: "$11.99",
  },
  {
    title: "The Great Gatsby",
    description:
      "A story of wealth, love, and the American Dream in the Jazz Age.",
    coverImg: "img/book-4.jpg",
    price: "$10.99",
  },
  {
    title: "Moby Dick",
    description:
      "An epic tale of a sea captain's obsessive quest to hunt a giant white whale.",
    coverImg: "img/book-5.jpg",
    price: "$13.99",
  },
];

let libraries = [
  {
    title: "Alpha 1",
    description:
      "lorem ipsum, koko loves Basbosa, They are getting married in two years.",
    img: "./img/lib-1.jpg",
  },
  {
    title: "Library 2",
    description: "lorem ipsum, Koko & Basbosa love eachother very much.",
    img: "./img/lib-2.jpg",
  },
  {
    title: "Library 3",
    description: "We are 16 years old. We are at We Alex school.",
    img: "./img/lib-3.jpg",
  },
];

let colors=[
  "red","yellow","pink","green","blue","brown",document.querySelector("body").style.backgroundColor
]

let container = document.getElementsByClassName("container")[0];
const createBook = (book) => {
  container.innerHTML += `
  <div class="book-item">
        <img class="cover-img" src="${book.coverImg}" alt="${book.name}" />

        <div class="book-details">

          <h2 class="title">${book.title}</h2>
          <p class="descripton">
            ${book.description}
          </p>
          <span class="price">${book.price}</span>
        </div>
      </div>
`;
};
books.forEach(createBook);

/*
1-select carousel slide (done)
2-define FUN=> to create slides (done)
3-using forEach => to call fun and loops on arr(done)
4-define the current slide in var(done)
5-count the length in var(done)
6-define func=> to move next 
7-set condition =>check if currentSlide not equal to last index slide
increase the current slide 1 

else => current slide=0
8-define a function to change the style of the slides(parent) with this equaion
-(current slide *100)%}=>the end of func 2
9- define func=> to move prev #
10-select the title,desc of the overlay
11-update their values in updateSlide FUNCTION with the arr which contain the objects with [currentSlide]=>dunamic index in the arr.the value of key in object
*/
let slides=document.querySelector(".slides");
function createSlide(lib){
  slides.innerHTML+=`
    <div class="slide">
          <img src="${lib.img}" alt="">
        </div>
  `
}
libraries.forEach(createSlide);
let currentSlide=0;
let countSlides=document.querySelectorAll(".slide").length;
let title=document.querySelector(".overlay .title");
let desc=document.querySelector(".desc");

function moveNext(){
  if (currentSlide!=(countSlides-1)){
    currentSlide++;
  }
  else{
    currentSlide=0;
  }
updateSlides()
} 

function updateSlides(){ 
  slides.style.transform=`translate(-${currentSlide*100}%)`;
  title.textContent=libraries[currentSlide].title;
  desc.textContent=libraries[currentSlide].description;
}

function movePrev(){
  if (currentSlide!=0){
    currentSlide--; 
  }
  else{
    currentSlide=countSlides-1;
  }
updateSlides();
}

setInterval(moveNext,4000);
updateSlides();

const btn=document.querySelector(".go-up");
function goUp(e){
  scroll({ 
    //لما اكون عايزة اعمل سكرول بالjs
    top:0,  //الزق فوق
    behavior:"smooth", //زي الترانزيشن
  })
}
btn.addEventListener("click",goUp)

window.addEventListener("scroll",(e)=>{
  if(scrollY==0) {
    btn.style.display="none";
  }
  else {
    btn.style.display="block";
  
  }
});
/*
1- select dropdpwn div
2- select a=> (drop-dpwn-btn)
3- define a functio
*/
const dropDownBtn=document.querySelector(".drop-down-btn");
const dropDown=document.querySelector(".drop-down");
dropDownBtn.addEventListener("click",(e)=>{
  dropDown.style.display="block";
  e.preventDefault()
})
document.addEventListener("click",(e)=>{
  // let dropDownNotClicked = !Array.from(dropDown.childNodes).includes(e.target) && e.target != dropDown;
  
  if(e.target != dropDownBtn &&  e.target != dropDown){
    dropDown.style.display="none";
  }
})

let body=document.querySelector("body");
let currentIndex;
function changeColor() {
  let randIndex;
  do{
    randIndex=Math.floor(Math.random()*colors.length);
  }
  while(currentIndex==randIndex);
  body.style.backgroundColor=colors[randIndex];
  currentIndex=randIndex;
}
setInterval(changeColor,1000)
/* Since condition in the while itself no need for if
It will run the code inside the while  ok
1- define a var to store the currentIndex
2-initiate a while loop
3- set a condition to check if currentIndex=randomIndex
4-if true: pick another number 
else: body.style.backgroundColor=colors[randIndex];

 We have two types of loops: iterative based loops and conditioned loops
 What do we need here? conditioned What are the conditoned only loops:
 -while
 - do-while yep which will u use?
 do-while? What is the diff between both?
 do-while perform a specific task before checking if condition is true
 while: excute the code inside it while the condition is true 
 so we need while start doing the stask
*/