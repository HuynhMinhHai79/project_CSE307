document.querySelectorAll('.box2 .btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const imageSrc = document.querySelectorAll('.box2 img')[index].getAttribute('src');
        const priceSrc = document.querySelectorAll('.price')[index].textContent
        window.location.href = 'details.html?image=' + encodeURIComponent(imageSrc) + "&price=" + encodeURIComponent(priceSrc);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imageSrc = urlParams.get('image');
    const price = urlParams.get('price');
    console.log(imageSrc);
    if (imageSrc) {
        const imageElement = document.querySelector('.details .image img');
        imageElement.setAttribute('src', decodeURIComponent(imageSrc));
    }

    if (price) {
        const imageElement = document.querySelector('.content .price-detail');
        imageElement.innerHTML = decodeURIComponent(price)
    }
});

// Back to top
document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Smooth scroll to the top when the button is clicked
    backToTopBtn.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});
