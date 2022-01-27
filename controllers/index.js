const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api/homeroutes')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
