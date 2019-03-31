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
  models.Product.create(req.body.product)
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
router.get('/api/product/:id', (req, res) => {

  if(!isNaN(req.params.id)){
    models.Product.findByPk(req.params.id)
     .then(product => {

       if(product !== null){
         res.status(200).json({ product : product });
       } else{
         res.status(404).json({
           error: "product not found"
           
         });
       }
     })
     .catch(e => console.log(e));
    } else {
      res.status(406).json({ error: "Invalid ID"});
    }
  });


  router.put('/api/product/:id', (req, res) => {

    models.Product.findByPk(req.params.id)
      .then(product => {
        return product.update({
            name: req.body.product.name,
            description: req.body.product.description,
            image: req.body.product.image,
            owner_id: req.body.product.owner_id,
            close_bid: req.body.product.close_bid     
        }).then(updatedProduct => {
  
          res.status(200).json({product: updatedProduct});
        }).catch(e => console.log(e))
      })
      .catch(e => console.log(e))
    });



export default router;
