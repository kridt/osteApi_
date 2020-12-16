module.exports = function(request, response, next) {
    if (!request.headers.authorization) {
        response.status(401);
        response.end();
    }
    /* process.env.TOKEN) */
    if(request.headers.authorization != "Bearer MegetHemmeligAPITokenKodeSomAldrigMaaDelesTilAndre") {
        response.status(403);
        response.end();
        return;
    }
    console.log(request.headers); 
    next();
};