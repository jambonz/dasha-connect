const router = require('express').Router();
const WebhookResponse = require('@jambonz/node-client').WebhookResponse;
const assert = require('assert');

assert.ok(process.env.DASHA_SIP_URI, 'env required for DASHA_SIP_URI');

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /dial-dasha');
  try {
    const app = new WebhookResponse();
    app.dial({
      answerOnBridge: true,
      target: [
        {
          type: 'sip',
          sipUri: process.env.DASHA_SIP_URI
        }
      ]
    });
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
