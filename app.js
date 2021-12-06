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
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // let json = data
            // const json = JSON.stringify(data)
            console.log(data)
            // console.log(json)
            let output = ''
            // output = data.env
            data.forEach(function (environment) {
                output += `<li>${environment.env}: ${environment.conn}</li>`
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            document.getElementById('output').innerHTML = err
        })
}

function getAPI() {
    fetch('env.json')
        .then(function (res) {
            return res.text()
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data
        })
        .catch(function (err) {
            document.getElementById('output').innerHTML = err
        })
}

function getAPI() {
    fetch('https://api.github.com/users/jn573')
        .then(function (res) {
            return res.json()
        })
        // .then(handleErrors)
        .then(function (data) {
            console.log(data)
            let output = ''
            output = `Login: ${data.login}<br/>`
            // output += `id: ${data.id}<br/>`
            output += `URL: ${data.url}<br/>`
            output += `Location: ${data.location}<br/>`
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            document.getElementById('output').innerHTML = err
        })
}

function handleErrors(res){
    if (!res.ok) throw new Error(res.error)
    return res
}