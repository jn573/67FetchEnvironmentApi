json = [
    {
        "env": "pre",
        "conn": "connection-details"
    },
    {
        "env": "post",
        "conn": "connection-details"
    },
    {
        "env": "sit",
        "conn": "connection-details"
    }
]

data = json

data.forEach(function (env) {
    console.log(env.env)
})