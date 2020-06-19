const rateLimit = require("express-rate-limit");


const rateLimiter = rateLimit({
    windowMs:60000, // 1 hour
    max:3,
    message:'Too many API requests created from this IP. Please try again later!'
});


module.exports.rateLimiter = rateLimiter;