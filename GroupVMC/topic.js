let section = document.querySelector('.section')
let img_section = document.querySelectorAll('.img_section')
let buy_section = document.querySelectorAll('.buy_section')

function Light() {
	section.style.backgroundColor = 'white'
	section.style.color = '#1f1f1f'
	for(let j = 0; j < img_section.length; j++) {
		img_section[j].style.backgroundColor = '#1f1f1f'
		img_section[j].style.boxShadow = '3px 3px 3px 3px #1f1f1f'
	}
	for(let i = 0; i < buy_section.length; i++) {
		buy_section[i].style.boxShadow = '3px 3px 3px 3px #1f1f1f'
		buy_section[i].style.color = 'white'
		buy_section[i].style.backgroundColor = '#1f1f1f'
		buy_section[i].onmouseover = () => {
			buy_section[i].style.textShadow = '1px 1px 1px white'
		}
		buy_section[i].onmouseout = () => {
			buy_section[i].style.textShadow = 'none'
		}
	}
}

function Darkness() {
	section.style.backgroundColor = '#1f1f1f'
	section.style.color = 'white'
	for(let h = 0; h < img_section.length; h++) {
		img_section[h].style.backgroundColor = 'darkgray'
		img_section[h].style.boxShadow = '0px 0px 3px 3px darkgray'
	}
	for(let k = 0; k < buy_section.length; k++) {
		buy_section[k].style.boxShadow = '0px 0px 3px 3px darkgray'
		buy_section[k].style.color = 'white'
		buy_section[k].style.backgroundColor = 'darkgray'
		buy_section[k].onmouseover = () => {
			buy_section[k].style.textShadow = '1px 1px 1px white'
		}
		buy_section[k].onmouseout = () => {
			buy_section[k].style.textShadow = 'none'
		}
	}
}