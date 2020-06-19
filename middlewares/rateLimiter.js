const rateLimit = require("express-rate-limit");


const imageLimiter = rateLimit({
    windowMs:60000, // 1 hour
    max:3,
    message:'Too many API requests created from this IP. Please try again later!'
});

const artistLimiter = rateLimit({
    windowMs:60000, // 1 hour
    max:5,
    message:'Too many registrations from this IP. Please try again later!'
})


module.exports = {imageLimiter,artistLimiter};