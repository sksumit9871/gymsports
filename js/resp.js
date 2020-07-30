burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click'  , ()=>{
	 rightNav.classList.toggle('v-Class-Resp');
	 navList.classList.toggle('v-Class-Resp');
	 navBar.classList.toggle('h-Nav-Resp');
});
