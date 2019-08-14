module.exports = {
    apps : [{
        name: "Socket server",
        script: "./app.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}