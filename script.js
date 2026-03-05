function toggleBeach() {
    const beach = document.getElementById("beach");
    if (beach.classList.contains("hidden")) {
        beach.classList.remove("hidden");
        beach.style.opacity = 0;
        beach.style.transform = "translateY(40px)";
        setTimeout(() => {
            beach.style.transition = "all 1.2s ease";
            beach.style.opacity = 1;
            beach.style.transform = "translateY(0)";
        }, 100);
    } else {
        beach.style.transition = "all 0.6s ease";
        beach.style.opacity = 0;
        beach.style.transform = "translateY(40px)";
        setTimeout(() => beach.classList.add("hidden"), 600);
    }
}

/* ========================
   TOGGLE TEMPLE SECTION
======================== */
function toggleTemple() {
    const temple = document.getElementById("temple");
    if (temple.classList.contains("hidden")) {
        temple.classList.remove("hidden");
        temple.style.opacity = 0;
        temple.style.transform = "translateY(40px)";
        setTimeout(() => {
            temple.style.transition = "all 1.2s ease";
            temple.style.opacity = 1;
            temple.style.transform = "translateY(0)";
        }, 100);
    } else {
        temple.style.transition = "all 0.6s ease";
        temple.style.opacity = 0;
        temple.style.transform = "translateY(40px)";
        setTimeout(() => temple.classList.add("hidden"), 600);
    }
}

/* ========================
   SCROLL REVEAL ANIMATIONS
======================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal, .reveal-delay");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ========================
   BACK TO TOP BUTTON
======================== */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================
   BACKGROUND MUSIC (OPTIONAL)
======================== */
document.addEventListener("click", function() {
    const music = document.getElementById("bgMusic");
    if (music && music.paused) {
        music.volume = 1;
        music.play().catch(() => {});
    }
}, { once: true });

/* ========================
   AUTOMATIC COUNTRY REVEAL
======================== */
const countrySelect = document.getElementById("countrySelect");
const countryResult = document.getElementById("countryResult");

countrySelect.addEventListener("change", function() {
    const country = this.value;

    // Clear previous content
    countryResult.innerHTML = "";
    countryResult.style.opacity = 0;
    countryResult.style.transform = "translateY(40px)";

    if (!country) return;

    let html = "";
    if (country === "japan") {
        html = `
            <h3>Japan</h3>
            <p>The Land of the Rising Sun: temples, lantern-lit streets, and cherry blossoms at dusk.</p>
            <img src="images/Traveljapan.jpg, alt="Japan">
            
        `;
    } else if (country === "mauritius") {
        html = `
            <h3>Mauritius</h3>
            <p>A tropical island in the Indian Ocean known for its white sandy beaches, turquoise lagoons, and vibrant multicultural heritage..</p>
            <img src="images/mauritius.jpg", alt="Mauritius">
        `;
    }

    // Insert content (hidden initially)
    countryResult.innerHTML = html;

    // Trigger cinematic reveal animation
    setTimeout(() => {
        countryResult.style.transition = "all 1.2s ease";
        countryResult.style.opacity = 1;
        countryResult.style.transform = "translateY(0)";
    }, 100);
});
function searchDestinations() {
    const query = document.getElementById('searchBox').value;
    const results = document.getElementById('searchResults');
    results.innerHTML = `<p>You searched for: ${query}</p>`;
}

function clearSearch() {
    document.getElementById('searchBox').value = '';
    document.getElementById('searchResults').innerHTML = '';
}
