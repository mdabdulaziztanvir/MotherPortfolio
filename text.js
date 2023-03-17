const textElement = document.getElementById('text');
const texts = ['"সেবিকা"', '"রাঁধুনি"', '"মহীয়সী"','"খুব ভালো"','"খুব সুন্দর"','"নিবিড়ের মা"'];
let textIndex = 0;
let charIndex = 0;
let cursorIntervalId;

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    startCursorBlink();
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    stopCursorBlink();
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

function startCursorBlink() {
  cursorIntervalId = setInterval(() => {
    if (textElement.textContent.endsWith('|')) {
      textElement.textContent = textElement.textContent.slice(0, -1);
    } else {
      textElement.textContent += '|';
    }
  }, 500);
}

function stopCursorBlink() {
  clearInterval(cursorIntervalId);
  textElement.textContent = textElement.textContent.slice(0, -1);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});
