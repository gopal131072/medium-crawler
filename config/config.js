module.exports = {
    STARTING_URL: process.env.STARTING_URL || 'https://medium.com/topic/popular',
    BASE_URL: process.env.BASE_URL || 'medium.com',
    MAX_CONCURRENT_REQUESTS: process.env.MAX_CONCURRENT_REQUESTS || 5,
    MAX_URLS: process.env.MAX_URLS || 5000 // -1 if you want this to go on infinitely 
}