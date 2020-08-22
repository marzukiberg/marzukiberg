
const projectDesc = $('[class="project-desc"]');
// const moreskills = $("#moreskills");


projectDesc.click(function(){
  $(this).toggleClass("project-desc");
})

/*moreskills.click(function() {
  alert("Hello");
})*/

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}