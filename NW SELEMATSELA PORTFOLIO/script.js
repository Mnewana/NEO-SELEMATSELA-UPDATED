const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentMode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentMode
    if (this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
});

