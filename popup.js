const para = document.getElementById('para')

fetch("https://icanhazdadjoke.com/slack")
    .then(res => res.json())
    .then(joke => {
        para.innerHTML = joke.attachments[0].fallback
    })