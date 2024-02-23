// start header JavaScript Code

/* start javascript darkMode */

let checkedDarkMode = document.querySelector(".landing .dark-mode input");
checkedDarkMode.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.style.cssText = "background-color: #181a1b !important;";
    document.querySelector(":root").style.cssText = "--second-color:#cfc6b5;--dark-mode : white;--border-in-the-main-paragraph:black";
    let timerInterval;
    Swal.fire({
      title: "Dark Mode Has Been Activated!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      customClass: "swal-style",
      didOpen: () => {
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  } else {
    document.body.style.cssText = "background-color: white !important";
    document.querySelector(":root").style.cssText = "--second-color:#777;--dark-mode : black;--border-in-the-main-paragraph:white";
    let timerInterval;
    Swal.fire({
      title: "Dark Mode Has Been Stopped!",
      customClass: "swal-style",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      didOpen: () => {
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  }
});

/* end javascript darkMode */

let aInUlHeader = document.querySelectorAll(
  ".header .container .links ul li a"
);

function removeActiveA() {
  aInUlHeader.forEach((e) => {
    e.classList.remove("active");
  });
}

aInUlHeader.forEach((e) => {
  e.addEventListener("click", () => {
    removeActiveA();
    e.classList.add("active");
    if (
      document.querySelector(".header .container .links > i").style.display ===
      ""
    ) {
      document.querySelector(
        ".header .container .links > i + ul"
      ).style.display = "none";
    }
  });
});

let smallList = document.querySelector(".header .container .links > i");

smallList.addEventListener("click", () => {
  if (
    document.querySelector(".header .container .links > i:hover + ul").style
      .display === "flex"
  ) {
    document.querySelector(
      ".header .container .links > i:hover + ul"
    ).style.display = "none";
  } else {
    document.querySelector(
      ".header .container .links > i:hover + ul"
    ).style.cssText =
      "display: flex;position: absolute;background-color: #00000099;bottom: -250px;left: 15px;width: 100%;align-items: flex-start;flex-direction: column;z-index: 1001;padding:10px 0";

    document
      .querySelectorAll(".header .container .links > i:hover + ul li")
      .forEach((e) => {
        e.style.cssText = "width: 100%;margin: 0;padding: 0;";
      });
    document
      .querySelectorAll(".header .container .links > i:hover + ul li a")
      .forEach((e) => {
        e.style.cssText = "padding: 10px;";
      });
  }
});

//Initializing
var currentImageIndex = 0;
var images = []; //array
var time = 3000; // time in millie seconds

//images
images[0] = "url(../imgs/landing-one.webp)";
images[1] = "url(../imgs/landing-two.jpg)";
images[2] = "url(../imgs/landing-three.jpg)";
images[3] = "url(../imgs/landing-four.jpg)";
images[4] = "url(../imgs/landing-five.jpg)";
images[5] = "url(../imgs/landing-six.jpg)";
images[6] = "url(../imgs/landing-seven.jpg)";
images[7] = "url(../imgs/landing-eight.jpg)";
images[8] = "url(../imgs/landing-nine.jpg)";
images[9] = "url(../imgs/landing-ten.jpg)";

// function
function changeImage() {
  activePhotoSpan();

  var el = document.querySelector(".landing");
  el.style.backgroundImage = images[currentImageIndex];
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }

  setTimeout("changeImage()", time);
}

function removeAllActivePhotoSpan() {
  let allSpans = document.querySelectorAll(".landing .footer span");
  allSpans.forEach((e) => {
    e.classList.remove("active-photo");
  });
}

function activePhotoSpan() {
  removeAllActivePhotoSpan();
  let allSpans = document.querySelectorAll(".landing .footer span");
  allSpans[currentImageIndex].classList.add("active-photo");
}

let backgroundPhotoChangeLeft = document.querySelector(
  ".landing .fa-angle-left"
);

backgroundPhotoChangeLeft.addEventListener("click", () => {
  let currentBackGround = document.querySelector(".landing");
  let styles = window.getComputedStyle(currentBackGround);
  let photo = styles.backgroundImage;
  let url = photo.slice(5, -2);
  let currentBackGroundUrl = `url(../${url.slice(url.indexOf("imgs"))})`;

  let currentUrlIndexInArray = images.indexOf(currentBackGroundUrl);

  if (currentUrlIndexInArray === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex = --currentUrlIndexInArray;
  }

  currentBackGround.style.backgroundImage = images[currentImageIndex];

  activePhotoSpan();
});

let backgroundPhotoChangeRight = document.querySelector(
  ".landing .fa-angle-right"
);

backgroundPhotoChangeRight.addEventListener("click", () => {
  let currentBackGround = document.querySelector(".landing");
  let styles = window.getComputedStyle(currentBackGround);
  let photo = styles.backgroundImage;
  let url = photo.slice(5, -2);
  let currentBackGroundUrl = `url(../${url.slice(url.indexOf("imgs"))})`;
  let currentUrlIndexInArray = images.indexOf(currentBackGroundUrl);

  if (currentUrlIndexInArray === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex = ++currentUrlIndexInArray;
  }

  currentBackGround.style.backgroundImage = images[currentImageIndex];
  console.log(images.length);
  activePhotoSpan();
});

window.onload = function () {
  // hna hy3ml al spans aly fy al header
  let landingFooter = document.querySelector(".landing .footer");
  for (let j = 0; j < images.length; j++) {
    let span = document.createElement("span");
    span.classList.add("normal-span");
    span.textContent = j + 1;
    span.addEventListener("click", () => {
      removeAllActivePhotoSpan();
      span.classList.add("active-photo");
      document.querySelector(".landing").style.backgroundImage = images[j];
      currentImageIndex = j;
    });
    if (currentImageIndex === j) {
      span.classList.add("active-photo");
    }
    landingFooter.append(span);
  }

  // hna aly hwa by8yar al sora kol 4waya
  changeImage();

  // hna hn3ml al function aly ht3ml shuffle ll swar

  let allCategories = document.querySelectorAll(".portfolio .photos .col");

  let orderRange = [...Array(allCategories.length).keys()];

  // shuffle the order range
  function changeOrder(orderRange) {
    for (let i = 0; i < orderRange.length; i++) {
      let random = Math.floor(Math.random() * orderRange.length);

      [orderRange[i], orderRange[random]] = [orderRange[random], orderRange[i]];
    }
  }

  // excute the function
  changeOrder(orderRange);

  // order the boxes
  allCategories.forEach((ele, index) => {
    ele.style.order = orderRange[index];
  });

  let allPInImages = document.querySelectorAll(
    ".portfolio .photos .col .explain-the-image p"
  );

  let liInPortfoliSelcted = document.querySelectorAll(
    ".portfolio .container ul li"
  );

  allCategories.forEach((element, index) => {
    allPInImages[index].textContent = (element.getAttribute("section")).toUpperCase();

    allPInImages[index].addEventListener("click", () => {
      removeActiveLi();
      openTheSelectedCategory(element.getAttribute("section"));
      liInPortfoliSelcted.forEach((ele) => {
        if (ele.getAttribute("section") === element.getAttribute("section")) {
          ele.classList.add("active-li");
        }
      });
    });
  });
};

let searchIcon = document.querySelector(".header .container .links .form i");

searchIcon.addEventListener("click", () => {
  let searchInput = document.querySelector(
    ".header .container .links .form input"
  );
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    searchInput.focus();
    searchIcon.style.cssText = "padding-right: 15px;";
  } else {
    searchInput.style.display = "none";
    searchIcon.style.cssText = "padding-right: 0px;";
  }
});

// end header javaScript Code

// start portfolio javascript
let liInPortfoli = document.querySelectorAll(".portfolio .container ul li");

function removeActiveLi() {
  liInPortfoli.forEach((e) => {
    e.classList.remove("active-li");
  });
}

liInPortfoli.forEach((ele) => {
  ele.addEventListener("click", () => {
    removeActiveLi();
    let category = ele.getAttribute("section");
    openTheSelectedCategory(category);
    ele.classList.add("active-li");
  });
});

function openTheSelectedCategory(category) {
  let allCategories = document.querySelectorAll(".portfolio .photos .col");
  if (category === "all") {
    allCategories.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    allCategories.forEach((element) => {
      if (element.getAttribute("section") === category) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
}

let galleryImages = document.querySelectorAll(".portfolio .photos .col img");
let getLatestOpenImage;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      let getFullImageUrl = image.getAttribute("src");
      getLatestOpenImage = index;

      let newImgWindow = document.createElement("div");
      newImgWindow.classList.add("img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");
      document.body.append(newImgWindow);

      let newImg = document.createElement("img");
      newImg.setAttribute("src", getFullImageUrl);
      newImg.setAttribute("id", "current-img-for-the-full-width");
      newImgWindow.append(newImg);

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("i");
        newNextBtn.classList.add("img-btn-next");
        newNextBtn.classList.add("fas");
        newNextBtn.classList.add("fa-angle-right");
        newNextBtn.classList.add("change-background");
        newNextBtn.classList.add("fa-2x");
        newNextBtn.setAttribute("title", "Next Image");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("i");
        newPrevBtn.classList.add("img-btn-prev");
        newPrevBtn.classList.add("fas");
        newPrevBtn.classList.add("fa-angle-left");
        newPrevBtn.classList.add("change-background");
        newPrevBtn.classList.add("fa-2x");
        newPrevBtn.setAttribute("title", "Previous Image");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

        document.body.append(newNextBtn, newPrevBtn);
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img-for-the-full-width").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.append(newImg);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = getLatestOpenImage + 1;
    if (calcNewImg === galleryImages.length) {
      calcNewImg = 0;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenImage - 1;
    if (calcNewImg === -1) {
      calcNewImg = galleryImages.length - 1;
    }
  }

  newImg.setAttribute("src", galleryImages[calcNewImg].getAttribute("src"));
  newImg.setAttribute("id", "current-img-for-the-full-width");

  getLatestOpenImage = calcNewImg;
  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
  };
}

// end javascript portfoli
