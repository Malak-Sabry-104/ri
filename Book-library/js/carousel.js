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

const slides = document.querySelector(".slides");

const addSlide = (lib) => {
  slides.innerHTML += `
  <div class="slide">
          <img src="${lib.img}" alt="">
        </div>
  `;
};
libraries.forEach(addSlide)

let currentSlide = 0
let slidesCount = document.querySelectorAll('.slide').length

let carouselTitle = document.querySelector('.overlay .title');
let carouselDesc = document.querySelector('.overlay .desc');

const nextSlide = () => {
  if (currentSlide == slidesCount-1) {
    currentSlide = 0
  } else {
    currentSlide ++;
  }

  updateSlide();
}

const prevSlide = () => {
  if (currentSlide == 0) {
    currentSlide = slidesCount - 1;
  } else {
    currentSlide--;
  }

  updateSlide();
}

const updateSlide = () => {
  slides.style.transform = `translateX(-${currentSlide*100}%)`;
  carouselTitle.innerText = libraries[currentSlide].title;
  carouselDesc.innerText = libraries[currentSlide].description;
}

setInterval(nextSlide, 5000);
updateSlide();