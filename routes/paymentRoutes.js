const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    req.headers["user-agent"] = "fred";
    req.headers["cookie"] = "fred";
    req.headers["accept-language"] = "en-US,en";
    req.headers["accept"] = "application/json";
    req.headers["content-type"] = "application/json";
    req.headers["x-request-id"] = "";
    req.headers["x-forwarded-for"] = "";
    req.headers["x-forwarded-proto"] = "";
    req.headers["x-forwarded-port"] = "";
    req.headers["x-request-start"] = "";

    console.log(req.headers);

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "blah",
      source: req.body.id
    });

    req.user.credits += 5;

    const user = await req.user.save();
    res.send(user);
  });
};
