function setupModal(openBtnId, modalId, closeClass) {
    var openModalBtn = document.getElementById(openBtnId);
    var modal = document.getElementById(modalId);
    var closeSpan = modal.querySelector("." + closeClass);

    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeSpan.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

setupModal("openModalBtn", "myModal", "close");

setupModal("openModalBtnMedico", "myModalMedico", "closeMedico");

setupModal("openModalBtnAdmin", "myModalAdmin", "closeAdmin");

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
    });
}

showSlide(currentSlide);

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    submenu.addEventListener('mouseover', () => {
        const submenuContent = submenu.querySelector('.submenu-content');
        submenuContent.style.display = 'block';
    });

    submenu.addEventListener('mouseout', () => {
        const submenuContent = submenu.querySelector('.submenu-content');
        submenuContent.style.display = 'none';
    });
});