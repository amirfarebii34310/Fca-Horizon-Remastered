'use strict';

switch (global.Fca.Require.FastConfig.BroadCast) {
    case true: {
        try {
            var logger = global.Fca.Require.logger;
                var Fetch = global.Fca.Require.Fetch;
                    Fetch.get("https://raw.githubusercontent.com/amirfarebii34310/Jordan-Amir/main/broadcast.json").then(async (/** @type {{ body: { toString: () => string; }; }} */ res) => {
                        global.Fca.Data.BroadCast = JSON.parse(res.body.toString())
                    var random = JSON.parse(res.body.toString())[Math.floor(Math.random() * JSON.parse(res.body.toString()).length)] || "Ae Zui Zẻ Nhé !";
                logger.Normal(random);
            }); 
        }	
        catch (e) {
            console.log(e);
        }
        return setInterval(() => { 
            try {
                try {
                    var logger = global.Fca.Require.logger;
                        var random = global.Fca.Data.BroadCast[Math.floor(Math.random() * global.Fca.Data.BroadCast.length)] || "Hey Guys Jordan-Amir HeRe !";
                    logger.Normal(random);
                }	
                catch (e) {
                    console.log(e);
                    return;
                }
            }
            catch (e) {
                console.log(e);
            }
        },3600 * 1000);
    }
    case false: {
        break;
    }
    default: {
        break;
    }
}
