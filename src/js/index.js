document.querySelector('.toggle-mnu').onclick = function(e) {
	this.classList.toggle('on');
	// document.documentElement.classList.toggle('menu-opened');
	// document.documentElement.classList.toggle('lock');
	document.querySelector('.menu-header__body').classList.toggle('translate-x-[-100%]');
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
setTimeout(() => {console.log(document.getElementById('light'))}, 2000)
console.log(document.querySelector('#dark'))
console.log(document.getElementById('light'))
document.getElementById('dark').onclick = () =>  {
	document.documentElement.classList.add('dark');
	localStorage.theme = 'dark';
}
document.getElementById('light').onclick = () =>  {
	document.documentElement.classList.remove('dark');
	localStorage.theme = 'light';
}

// Whenever the user explicitly chooses dark mode

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
console.log(localStorage.theme)
