import express from "express";
import passport from "passport";
import models from "./../db/models";
const tokenAuth = passport.authenticate("jwt", { session: false });
const User = models.User;

// instantiate a router (mini app that only handles routes)
const router = express.Router();

router.get("/example", tokenAuth, (req, res, next) => {
  // start a promise chain, so that any errors will pass to `handle`
});

router.get("/api/products", (req, res) => {
  models.Product.findAll()
    .then(products => {
      res.status(200).json({ products: products });
    })
    .catch(e => console.log(e));
});



router.post("/api/products", (req, res) => {
  console.log(req.body)
  models.Product.create(req.body.products)
  .then(product => {
    res.status(200).json({
      product: product
    });
  })
  .catch(e => console.log(e))
});



router.delete('/api/products/:id', (req, res) => {
  models.Product.findByPk(req.params.id)
  .then(product => {
     product.destroy()
       .then(() => {
       res.status(200).json({
       result: `Record ID ${req.params.id} Deleted`,
       success: true
      })
    })
    .catch(e => console.log(e))
   })
   .catch(e => console.log(e))
})

export default router;
