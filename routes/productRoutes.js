const keys = require("../config/keys");
const mongoose = require("mongoose");
const Flowers = mongoose.model("flowers");

//https://picasaweb.google.com/data/feed/api/user/101177779892286593085/albumid/1000000486593085

const ig = require("instagram-node").instagram();

ig.use({
  client_id: keys.instagramClientID,
  client_secret: keys.instagramClientSecret,
  access_token: keys.instagramAccessToken
});

module.exports = app => {
  app.get("/api/flowers", async (req, res) => {
    Flowers.find({}, function(err, flowers) {
      var flowerArray = [];
      flowers.forEach(function(flower) {
        console.log("%%%%%%%%%%%%%%" + flower);

        flowerArray.push(flower);
      });

      res.send(flowerArray);
    });
  });

  app.get("/api/images", function(req, res) {
    ig.user_media_recent(keys.instagramAccessToken.split(".")[0], function(
      err,
      result,
      pagination,
      remaining,
      limit
    ) {
      if (err) res.json(err);
      // pass the json file gotten to our ejs template
      console.log(result);
      res.send(result);
    });
  });
};
