var g=document.querySelector("#grade")

function vaildate() {
	if (g.value=="" || g.value ==null) {
		c=document.querySelector("#show")
		c.innerText="Input a value"
		return false
	}
	else if (g.value>=80 || g.value<=100){
		c=document.querySelector("#show")
		c.innerText="A+"
		return false
	}
}