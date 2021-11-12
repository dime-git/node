const paypal = require('@paypal/checkout-server-sdk');

require('dotenv').config();

// Creating an environment
let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

// Call API with your client and get a response for your call
let authorize = async function(orderId) {
    const request = new paypal.orders.OrdersAuthorizeRequest(orderId);
    request.requestBody({});
    let response = await client.execute(request);
    console.log(`Response: ${JSON.stringify(response)}`);

    // If call returns body in response, you can get the deserialized version from the result attribute of the response.
    // console.log(`Order: ${JSON.stringify(response.result)}`);
}

authorize('9P657957TE938041G');

/**
 * POST /authorize ruta za avtorizacija na odnapred approve-nat order
 * - edinstveno nesto sto mu treba na ovoj kod kako dinamicki parametar a id na narackata (order id)
 * - moznosti za implementacija: route params, query params i req body
 * - vo response-ot ovoj endpoint treba da vrati id na authorization
 */