import images from "./images.js";

// console.log(images);

images.map(image => {
  const item = document.createElement("div");
  item.classList.add("item");
  $(".thumbnails").append(item);

  const caption = document.createElement("p");
  caption.classList.add("caption");
  $(caption).text(`${image.title}`)
  $(item).append(caption);

  const itemImg = document.createElement("img");
  itemImg.classList.add("thumb");
  itemImg.setAttribute("data-index", `${image._id}`);
  $(itemImg).attr("src", `./img/${image.src}`);
  $(item).append(itemImg);
});


let curImg = 0;

// console.log(images.length);

const loadPhoto = imgNum => {
  $(".photo").attr("src", `./img/${images[imgNum].src}`);
  $(".title").text(`${images[imgNum].title}`);
  $(".description").text(`${images[imgNum].description}`);
}

$(".arrow-right").on("click", () => {
  if (curImg < images.length - 1) {
    loadPhoto(++curImg);
  } else {
    curImg = images[0]._id;
    loadPhoto(curImg);
  }
});

$(".arrow-left").on("click", () => {
  if (curImg > 0) {
    loadPhoto(--curImg);
  } else {
    curImg = images[images.length - 1]._id;
    loadPhoto(curImg);
  }
});

$(".thumb").on("click", (event) => {
  let clicked = $(event.target).attr("data-index");
  let imgNum = parseInt(clicked);
  $(".photo").attr("src", `./img/${images[imgNum].src}`);
})

loadPhoto(curImg);