const { Router } = require("express");
const { CLIENT_ID, DOMAIN } = process.env;

const route = Router();

route.get("/", async (req, res, next) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=737680912388587521&redirect_uri=https%3A%2F%2Fdiscord.bothallalist.ga%2Fapi%2Fcallback&response_type=code&scope=identify`);
});

module.exports = route;
