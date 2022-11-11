const liveLogo = document.getElementById("plurality-logo-text");
const logoText = "plurality";
const logoTextArray = logoText.split("");

const fontFamilies = [
  "lanapixel",
  "lanapixel",
  "authentic-sans"
];

const fontWeights = [
  "normal",
  "bold"
];

const randomFont = () => {
  const randomIndex = Math.floor(Math.random() * fontFamilies.length);
  return fontFamilies[randomIndex];
}

logoTextArray.forEach(letter => {
  const letterSpan = document.createElement("span");
  letterSpan.textContent = letter;
  liveLogo.appendChild(letterSpan);
});

liveLogo.addEventListener("click", () => {
  const spans = liveLogo.querySelectorAll("span");
  spans.forEach(span => {
    span.style.fontFamily = randomFont();
    span.style.fontWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];
  });
});