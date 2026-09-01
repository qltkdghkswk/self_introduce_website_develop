// 사용자와 상호작용하는 기능

const aboutButton = document.getElementById("aboutButton");

aboutButton.addEventListener("click", function () {

    document
        .getElementById("about")
        .scrollIntoView({
            behavior: "smooth"
        });
});

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {

    alert("방문해주셔서 감사합니다! :)");
});
