/* popup */

var openPopup = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var closePopup = document.querySelector(".modal-feedback-close");
var overlay = document.querySelector(".overlay");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var question = popup.querySelector("[name=feedback-question]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

/* Слайдер*/
var slideBtn1 = document.querySelector(".slider-next-1");
var slideBtn2 = document.querySelector(".slider-next-2");
var slideBtn3 = document.querySelector(".slider-next-3");
var slider1 = document.querySelector("#slide1");
var slider2 = document.querySelector("#slide2");
var slider3 = document.querySelector("#slide3");

/* popup */

try {
	storageName = localStorage.getItem("name");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

openPopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("overlay-show");
	user.focus();

	if (storageName) {
		user.value = storageName;
		email.focus();
	}

	if (storageEmail) {
		email.value = storageEmail;
		question.focus();
	}
});

closePopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
	popup.classList.remove("modal-error");
});

overlay.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!user.value || !email.value || !question.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", user.value);
			localStorage.setItem("email", email.value);
		}
	}

});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			overlay.classList.remove("overlay-show");
			popup.classList.remove("modal-error");
		}
	}
});

/* Слайдер */

slideBtn1.addEventListener("click", function (evt) {
	evt.preventDefault();
	slider2.classList.remove("slider-item-current"); 
	slider3.classList.remove("slider-item-current");
	slider1.classList.add("slider-item-current"); 

	slideBtn2.classList.remove("slider-next-current");
	slideBtn3.classList.remove("slider-next-current");
	slideBtn1.classList.add("slider-next-current");
});

slideBtn2.addEventListener("click", function (evt) {
	evt.preventDefault();
	slider1.classList.remove("slider-item-current"); 
	slider3.classList.remove("slider-item-current");
	slider2.classList.add("slider-item-current"); 

	slideBtn1.classList.remove("slider-next-current");
	slideBtn3.classList.remove("slider-next-current");
	slideBtn2.classList.add("slider-next-current");
});

slideBtn3.addEventListener("click", function (evt) {
	evt.preventDefault();
	slider1.classList.remove("slider-item-current"); 
	slider2.classList.remove("slider-item-current");
	slider3.classList.add("slider-item-current"); 

	slideBtn1.classList.remove("slider-next-current");
	slideBtn2.classList.remove("slider-next-current");
	slideBtn3.classList.add("slider-next-current");
});
