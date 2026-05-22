const form =
    document.getElementById("registerForm");

const toast =
    document.getElementById("toast");

form.addEventListener("submit", e => {

    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
});