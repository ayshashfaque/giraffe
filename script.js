/* ==========================
       UNLOCK FUNCTION
========================== */
function unlockSite() {
    const input = document.getElementById("nameInput").value.trim().toLowerCase();
    const error = document.getElementById("errorMsg");

    const allowedNames = ["hari", "harinand"]; // add more if u want

    if (allowedNames.includes(input)) {
        error.textContent = "✨ Access Granted ✨";

        document.getElementById("siteContent").style.opacity = "1";
        document.getElementById("siteContent").style.pointerEvents = "auto";

        setTimeout(() => {
            document.getElementById("lockScreen").style.opacity = "0";
            document.getElementById("lockScreen").style.transition = "opacity 0.8s ease";
        }, 300);

        setTimeout(() => {
            document.getElementById("lockScreen").style.display = "none";
        }, 1200);

    } else {
        error.textContent = "❌ Access Denied ❌ Only my Player Two can enter 💗";
    }
}


/* ==========================
    FLOATING HEARTS
========================== */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("pixel-heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 180);

/* ==========================
        GIFT BOX
========================== */
function showGiftBox() {
    document.getElementById("giftOverlay").style.display = "flex";
}

function openGiftBox() {
    document.getElementById("giftImg").style.transform = "scale(0)";
    
    setTimeout(() => {
        document.getElementById("secretMessage").style.display = "block";
    }, 400);
}

function closeGiftBox() {
    document.getElementById("secretMessage").style.display = "none";
    document.getElementById("giftImg").style.transform = "scale(1)";
    document.getElementById("giftOverlay").style.display = "none";
}

/* ==========================
      GALLERY POPUP
========================== */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".gallery img").forEach(img => {
    img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    };
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";

