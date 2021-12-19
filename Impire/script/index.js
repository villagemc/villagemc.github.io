// Цвета при наведении на проекты:
const projectLinks = document.querySelectorAll('.project__link');
const projectImage = document.querySelectorAll('.project__image');

const colorsList = [
		{color: 'yellow'},
		{color: 'purple'},
		{color: 'red'},
		{color: 'lime'}
];

for (let i = 0; i < colorsList.length; i++) {
	projectLinks[i].onmouseover = () => {
		projectLinks[i].style.color = colorsList[i].color;
	};
	projectLinks[i].onmouseout = () => {
		projectLinks[i].style.color = 'white';
	};
};

// Работа с модальными окнами::
const popup = document.querySelector('.popup')
const popupParagraph = document.querySelector('.popup__paragraph');
const popupImage = document.querySelector('.popup__image');
const closedPopup = document.querySelector('.popup__close');

// Открытие модального окна
function openPopup(popup) {
	popup.classList.add('popup_open');
}

for (let a = 0; a < projectImage.length; a++) {
projectImage[a].addEventListener('click', () => {
	openPopup(popup);
	popupImage.src = projectImage[a].src;
	popupImage.alt = projectLinks[a].textContent;
	popupParagraph.textContent = projectLinks[a].textContent;
	});
};

// Закрытие модального окна:
function closePopup(popup) {
	popup.classList.remove('popup_open');
}

closedPopup.addEventListener('click', () => {
	closePopup(popup);
});

// Закрытие при щелчке вне попапа:
popup.addEventListener('click', (e) => {
	if (e.target.className !== 'popup') {
		e.target.classList.remove('popup_open');
	}
})