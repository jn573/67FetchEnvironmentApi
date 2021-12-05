document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)

function getText() {
    fetch('env.txt')
        .then(function (res) {
            return res.text()
        })
        .then(function (data) {
            console.log(data)
            document.getElementById('output').innerHTML = data
        })
        .catch(function (err) {
            console.log(err)
        })
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