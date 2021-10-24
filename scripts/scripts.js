const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


const photo1 = document.querySelector(".photo1");
const photo2 = document.querySelector(".photo2");
const photo3 = document.querySelector(".photo3");

const article1 = document.querySelector(".article-info1");
const article2 = document.querySelector(".article-info2");
const article3 = document.querySelector(".article-info3");

const row_reverse = document.querySelector("#portfolio-info");


addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
		console.log(go2Top.style.cursor);
	navbar.style.height = "8vh";
	navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		navbar.style.height = "10vh";
		navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
		console.log(go2Top.style.cursor);
	}
	if(scroll > photo1.clientHeight) {
    photo1.style.right= "0"
    article1.style.left= "0"
	} else {
		console.log("ready");
	}
	if(scroll > photo2.clientHeight) {
    photo2.style.left= "0"
    article2.style.right= "0"
	} else {
		console.log("ready");
	}
	if(scroll > photo3.clientHeight) {
    photo3.style.right= "0"
    article3.style.left= "0"
	} else {
		console.log("ready");
	}
})

// addEventListener("scroll", () => {
// 	let scroll = this.scrollY;
// 	if(scroll > photo1.clientHeight) {
//     photo1.style.right= "0"
//     article1.style.left= "0"
// 	} else {
// 		console.log("ready");
// 	}
// })

// addEventListener("scroll", () => {
// 	let scroll = this.scrollY;
// 	if(scroll > article2.clientHeight) {
//     photo2.style.left= "0"
//     article2.style.right= "0"
// 	} else {
// 		console.log("ready");
// 	}
// })

// addEventListener("scroll", () => {
// 	let scroll = this.scrollY;
// 	if(scroll > photo3.clientHeight) {
//     photo3.style.right= "0"
//     article3.style.left= "0"
// 	} else {
// 		console.log("ready");
// 	}
// })


go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});


// const sliders = document.querySelectorAll(".slider");
// const articles = document.querySelectorAll(".article-main p");
 
// sliders.forEach((slider, index) => {
// 	slider.addEventListener("mouseenter", () => {
// 	articles[index].style.zIndex = "1";
//     articles[index].style.opacity = 1;
//     articles[index].style.transition = "1.5s";
// 	articles[index].style.transitionDelay = "0.05s";
//   });

//   slider.addEventListener("mouseleave", () => {
// 	articles[index].style.zIndex = "-1";
//     articles[index].style.opacity = 0;
//     articles[index].style.transition = "0.2s";
// 	articles[index].style.transitionDelay = "0s";
//   }); 
// });

