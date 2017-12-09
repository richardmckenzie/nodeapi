const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    const searchParams = Object.keys(req.headers).map(key => {
      return (
        encodeURIComponent(key) + "=" + encodeURIComponent(req.headers[key])
      );
    });

    req.headers = searchParams;

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "blah",
      source: req.body.id
    });

    console.log(charge);

    req.user.credits += 5;

    const user = await req.user.save();
    res.send(user);
  });
};
