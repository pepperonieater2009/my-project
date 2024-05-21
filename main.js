// ! ======================== scroll up =======================
document.querySelector(".scroll-up").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ! ================ scroll to id ===================
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Получаем ID после символа #
        smoothScroll(targetId);
    });
});
