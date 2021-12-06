document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPI)

function getText() {
    fetch('env.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data)
            document.getElementById('output').innerHTML = data
        })
        .catch( err => console.log(err))
}

function getJSON() {
    fetch('env.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let output = ''
            data.forEach(function (environment) {
                output += `<li>${environment.env}: ${environment.conn}</li>`
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(err =>  document.getElementById('output').innerHTML = err)
}

function getAPI() {
    fetch('env.json')
        .then(err => res.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => document.getElementById('output').innerHTML = err)
}

function getAPI() {
    let api = null
    let gitHubUser = document.getElementById("gituser").value
    if (gitHubUser === '') {api = 'https://api.github.com/users/jn573' }
    else { api = `https://api.github.com/users/${gitHubUser}`}
    console.log(api)
    fetch(api)
        .then(res => res.json())
        // .then(handleErrors)
        .then(data => {
            console.log(data)
            let output = ''
            output = `Login: ${data.login}<br/>`
            output += `URL: ${data.url}<br/>`
            output += `Location: ${data.location}<br/>`
            document.getElementById('output').innerHTML = output
        })
        .catch(err => document.getElementById('output').innerHTML = err)
}

function handleErrors(res){
    if (!res.ok) throw new Error(res.error)
    return res
}