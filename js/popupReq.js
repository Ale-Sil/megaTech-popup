"use strict";

const openBtn = document.querySelectorAll(".popup-request--open");
const closeBtn = document.querySelectorAll(".popup--close-btn");
const module = document.querySelectorAll(".popup");
const moduleInner = document.querySelectorAll(".popup--close");

function moduleWork() {
	// кнопки - открывашки
	openBtn[0].addEventListener("click", () => {
		module[0].show();
	});

	// кнопки - закрывашки
	closeBtn[0].addEventListener("click", () => {
		module[0].close();
	});
	closeBtn[1].addEventListener("click", () => {
		module[1].close();
	});
	closeBtn[2].addEventListener("click", () => {
		module[2].close();
	});
	// бэк - закрывашка
	module[0].addEventListener("click", e => {
		if (e.target == module[0] || e.target == moduleInner[0]) {
			module[0].close();
		}
	});
	module[1].addEventListener("click", e => {
		if (e.target == module[1] || e.target == moduleInner[1]) {
			module[1].close();
		}
	});
	module[2].addEventListener("click", e => {
		if (e.target == module[2] || e.target == moduleInner[2]) {
			module[2].close();
		}
	});
}

const privacyPolicy = document.getElementById("privacyPolicy");
const subscriptionSand = document.getElementById("subscriptionSand");
const submitButton = document.getElementById("popupSubmit");

function checkPrivacy() {
	submitButton.addEventListener("click", () => {
		if (privacyPolicy.checked) {
			if (subscriptionSand.checked) {
				module[1].show();
				module[0].close();

				return;
			} else {
				module[2].show();
				module[0].close();
			}
		}
	});
}

moduleWork();
checkPrivacy();
