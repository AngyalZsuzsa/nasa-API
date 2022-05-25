/*
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

API-key: vBF7CKcfOYjBR4g1fwvWcddoG5AGzY5linKp2GbR

*/

async function loadNasa() {
    
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=vBF7CKcfOYjBR4g1fwvWcddoG5AGzY5linKp2GbR");
    const responseData = await response.json();
    
    renderNasaCanvas(responseData.date, responseData.title, responseData.url, responseData.explanation);
};
  
loadNasa();


function renderNasaCanvas(date, title, imageUrl,  explanation) {
    nasaCanvas.replaceChildren();
    nasaCanvas.insertAdjacentHTML("beforeend", `<div id="date">${date}</div>`);
    nasaCanvas.insertAdjacentHTML("beforeend", `<div id="title">${title}</div>`);
    nasaCanvas.insertAdjacentHTML("beforeend", `<img src="${imageUrl}"id="img">`);
    nasaCanvas.insertAdjacentHTML("beforeend", `<div id="explanation">${explanation}</div>`);
}
  
async function changeDataWithDate() {
    
    let date = document.getElementById("chooseDate").value;

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=vBF7CKcfOYjBR4g1fwvWcddoG5AGzY5linKp2GbR&date=${date}`)
    const responseData = await response.json();

    renderNasaCanvas(date, responseData.title, responseData.url, responseData.explanation);
}

changeDataWithDate()
  
