var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"Iphone 11",
      category:"Mobile",
      description:"This is an iphone",
      image:"https://m.media-amazon.com/images/I/71i2XhHU3pL._SX522_.jpg"
    },
    {
      name:"Nokia C30",
      category:"Mobile",
      description:"This is a Nokia Phone",
      image:"https://www.gizmochina.com/wp-content/uploads/2021/06/maxresdefault-500x500.jpg"

    },
    {
      name:"Xiaomi Redmi Note 10",
      category:"Mobile",
      description:"This is redmi phone",
      image:"https://www.notebookcheck.net/uploads/tx_nbc2/4_to_3_Teaser_Xiaomi_Redmi_Note_10_5G.jpg"

    },
    {
      name:"Samsung F41",
      category:"Mobile",
      description:"This is a Samsung Phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWpgk2JJumcX33Tu-kF7D5kwfpl792X_BMkujsHWehidfiqRmwc1AKjRfcqj8Eea5CSI&usqp=CAU"

    }
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
