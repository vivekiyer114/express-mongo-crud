module.exports = {
    mongoURI: "mongodb://localhost:27017/test",
    cookieKey: process.env.COOKIE_KEY,
    port : process.env.PORT,
    allowClient: ["http://localhost:3000","http://localhost:4000"]
}