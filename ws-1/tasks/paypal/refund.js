const paypal = require('@paypal/checkout-server-sdk');
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

require('dotenv').config();

//creating environment
let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

//this sample uses SandboxEnvironment. in production use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = paypal.core.PayPalHttpClient(environment);

const captureOrder = async (captureId) => {
    const request = new checkoutNodeJssdk.payments.CapturesRefundRequest(captureId);
    requrest.requestBody({});
    console.log(request);
    //call API with your client and get a response for your call

    let response = await client.execute(request);
    console.log(`Capture: ${JSON.stringify(response.result)}`)
}

captureOrder('48A16901V3698281K')