import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H9s5kCFaS5oDi46y2oYFuzihESSR6IBHviJxpAdHMdhGQNYHnZ3R51mblo6gdzTUcYBQumduIjhRNYdFEqPU2ZK00PlPfnCKA";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
