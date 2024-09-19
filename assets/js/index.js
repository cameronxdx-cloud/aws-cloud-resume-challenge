const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://gncjh6hb7rfber4acvy2l5o2bm0juigo.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();