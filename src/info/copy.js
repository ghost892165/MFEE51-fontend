//==============================page1==============================

document.getElementById("homeDoc").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "flex ";
	document.querySelector(".beautySelectBottom").style.display = "none ";
	document.querySelector(".nightSelectBottom").style.display = "none ";
	this.classList.add("changeColor");
	document.getElementById("homeBeauty").classList.remove("changeColor");
	document.getElementById("homeNight").classList.remove("changeColor");
});

document.getElementById("homeBeauty").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "none ";
	document.querySelector(".beautySelectBottom").style.display = "flex ";
	document.querySelector(".nightSelectBottom").style.display = "none ";
	this.classList.add("changeColor");
	document.getElementById("homeDoc").classList.remove("changeColor");
	document.getElementById("homeNight").classList.remove("changeColor");
});

document.getElementById("homeNight").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "none ";
	document.querySelector(".beautySelectBottom").style.display = "none ";
	document.querySelector(".nightSelectBottom").style.display = "flex ";
	this.classList.add("changeColor");
	document.getElementById("homeBeauty").classList.remove("changeColor");
	document.getElementById("homeDoc").classList.remove("changeColor");
});
``;
document.addEventListener("DOMContentLoaded", function () {
	var dots = document.querySelectorAll(".dot");
	var pages = document.querySelectorAll(".page");
	var container = document.querySelector(".container");

	var animated = false; // 修改部分

	function currentPage(pageNum) {
		// 使用 scrollIntoView 方法，將指定的頁面元素平滑地滾動到可視區域
		pages[pageNum - 1].scrollIntoView({ behavior: "smooth" });

		// 更新導航點的狀態
		updateDots(pageNum);

		// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
		if (pageNum === 3 && !animated) {
			// 修改部分
			startAnimation(); // 修改部分
			animated = true; // 修改部分
		} // 修改部分
	}

	function updateDots(activePage) {
		dots.forEach(function (dot, index) {
			if (index + 1 === activePage) {
				dot.classList.add("active");
			} else {
				dot.classList.remove("active");
			}
		});
	}

	function onScroll() {
		var scrollPos = container.scrollTop + window.innerHeight / 2;
		pages.forEach(function (page, index) {
			if (
				scrollPos >= page.offsetTop &&
				scrollPos < page.offsetTop + page.offsetHeight
			) {
				updateDots(index + 1);
				// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
				if (index + 1 === 3 && !animated) {
					// 修改部分
					startAnimation(); // 修改部分
					animated = true; // 修改部分
				} // 修改部分
			}
		});
	}

	container.addEventListener("scroll", onScroll);

	dots.forEach(function (dot, index) {
		dot.addEventListener("click", function () {
			currentPage(index + 1);
		});
	});

	// 初始化滾動位置，確保正確的圓點被設置為活動狀態
	onScroll();
});

document.addEventListener("DOMContentLoaded", () => {
	const footerHandles = document.querySelectorAll(".footer");
	footerHandles.forEach((handle) => {
		handle.addEventListener("click", () => {
			const footer = handle.closest(".footer");
			footer.classList.toggle("footer-expanded");
		});
	});
});
// =========================Page2=========================================

let scrollcontainer = document.querySelector(".cards");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

scrollcontainer.addEventListener("wheel", function (evt) {
	evt.preventDefault();
	scrollcontainer.scrollLeft += evt.deltaY;
});

next.addEventListener("click", function () {
	scrollcontainer.style.scrollBehavior = "smooth";
	scrollcontainer.scrollLeft += 400;
});

prev.addEventListener("click", function () {
	scrollcontainer.style.scrollBehavior = "smooth";
	scrollcontainer.scrollLeft -= 400;
});

//==========================page3===================================
// 修改部分：新增 startAnimation 函數，用於觸發數字動畫
function startAnimation() {
	const animalHome = document.querySelector(".Number1");
	animateNumber(animalHome, 1, 200, 3000);

	const animalMoney = document.querySelector(".Number2");
	animateNumber(animalMoney, 1, 1866224, 3000);

	const animalfood = document.querySelector(".Number3");
	animateNumber(animalfood, 1, 3212531, 3000);

	const animalNumber = document.querySelector(".Number4");
	animateNumber(animalNumber, 1, 120000, 3000);
}

function animateNumber(element, start, end, duration) {
	let startTime = null;

	function updateNumber(currentTime) {
		if (!startTime) startTime = currentTime;

		const progress = currentTime - startTime;

		const currentNumber = Math.min(
			Math.floor((progress / duration) * (end - start) + start),
			end
		);

		element.textContent = currentNumber.toLocaleString();

		if (currentNumber < end) {
			requestAnimationFrame(updateNumber);
		}
	}

	requestAnimationFrame(updateNumber);
}
