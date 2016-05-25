var express = require('express');
var productRouter = express.Router();
var request = require('request');

productRouter.get('/:search', function(req, res) {
    var url = "http://classic.avantlink.com/api.php?affiliate_id=101&module=ProductSearch&output=json&website_id=77&search_term=" + req.params.search + "&search_results_fields=Merchant+Name%7CProduct+SKU%7CProduct+Name%7CRetail+Price%7CSale+Price%7CLarge+Image%7CBuy+URL%7CDescription&search_results_count=30";
    var productResult = request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else {
        res.status(500).send(error);
      }
    })
});


module.exports = productRouter;
