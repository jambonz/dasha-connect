const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/dial-dasha', require('./dial-dasha'));

module.exports = router;
