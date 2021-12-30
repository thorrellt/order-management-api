const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'Orders were created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Order ID was Fetched',
        orderId: req.params.orderId
    });
});


router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted!'
    });
})

module.exports = router;