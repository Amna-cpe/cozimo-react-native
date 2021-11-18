const stripe = require('stripe')('sk_test_51JHNXlBKlUKWDS4x7KffiaYmOR9YWsysh4O3u1p13VgHk0djRRDLMguQkyJDFl9o4SR2ye8gxqyvV5B0zfee333S00pzjrYIc5')


// event
// {
//   "typeName": "Query" | "Mutation", /* Filled dynamically based on @function usage location */
//   "fieldName": "createPaymentMethod", /* Filled dynamically based on @function usage location */
//   "arguments": { amount  /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async (event) => {
    const { typeName, arguments } = event;
    const {amount } = arguments

    if (typeName !== 'Mutation') {
        throw new Error('Request is not a mutation');
    }

    if (!amount) {
        throw new Error('Amount argument is required');
    }

    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd'
    });

    return {
        clientSecret: paymentIntent.client_secret,
    }
};