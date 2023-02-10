// show modal => click =>
// opcaity =>1 ; backdrop =>block

const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal")
const confirm = document.querySelector(".confrim-modal")

showModalBtn.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(0vh)";
    backDrop.style.display = "block";
})

function close (){
        modal.style.opacity = "0";
        modal.style.transform = "translateY(-100vh)";
        backDrop.style.display = "none";
}

closeModal.addEventListener("click", close);
backDrop.addEventListener("click", close);
confirm.addEventListener("click", close)



