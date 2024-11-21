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
let container=document.querySelector(".bg-color");
let carouselContainer=document.querySelector(".carousel");
let overlayHeader=document.querySelector(".overlay h1");
let overlayP=document.querySelector(".overlay p");
let dropDownA=document.querySelector(".drop-down-a");
let dropDown=document.querySelector(".drop-down");
let btn=document.querySelector(".btn");
function createBook(book){//The param name doesn;t make sense it sould be match to the var we used in tags
container.innerHTML+=`
  <div class="card">
          <img src="${book.coverImg}" alt="" />
          <div class="text-card">
            <h2>${book.title}</h2>
            <p>
              ${book.description}
            </p>
            <p><span>${book.price}</span></p>
          </div>
        </div>
`
}
books.forEach(createBook);

function createSlides(slide){
  carouselContainer.innerHTML+=`
  
        <img src="${slide.img}" alt="" />
  `
}
libraries.forEach(createSlides);

let lastIndex=libraries.length;//fe ha7ga esmaha keda? is the array inside the docuemnt??
let currentSlide=0;
function moveNext(){
if(currentSlide==lastIndex-1){
  currentSlide=0;
}
else{
  currentSlide++;
}
updateSlide()

}
function movePrev(){
  if (currentSlide!=0){
    currentSlide--;
    }
  else{
    currentSlide=lastIndex-1;
  }    
  updateSlide()
}
function updateSlide(){
  carouselContainer.style.transform=`translateX(-${currentSlide*100}%)`//X or Y?
  overlayHeader.textContent=libraries[currentSlide].description;
// }What kind of data is libraries??Can u just answer me??? array how we access elements inm array?? with index=currentSlide
}
setInterval(moveNext,2000);
updateSlide()

dropDownA.addEventListener("click",(e)=>{//When anchor clicked
  e.preventDefault();
  dropDown.style.display=dropDown.style.display == "block"? "none" : "block" //Show the anchor, does it make sense? 
}) 

// i want when click on dropDownA to toggle the view if open then close and vice versa 
// how? think 

// if clicked anywhere outside the dropDownA and the dropDown hide it
// How to add eventlsitner when click everywhere? body?or document hmm both are ok
//but if u will use body u need to select it yeah i know
document.addEventListener("click",(e)=>{
  // e is the whole event we need only the tar
  if(e.target!=dropDownA && e.target!=dropDown){
  dropDown.style.display="none";
  }
})

btn.addEventListener("click",(e)=>{
  scroll(0, 0);
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
})