const SSLCommerzPayment = require("sslcommerz-lts");

exports.initPayment = async (req, res) => {
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123456",
    success_url: "http://localhost:5000/api/payment/success",
    fail_url: "http://localhost:5000/api/payment/fail",
    cancel_url: "http://localhost:5000/api/payment/cancel",
    ipn_url: "http://localhost:5000/api/payment/ipn",

    shipping_method: "Courier",
    product_name: "ZANOSA Premium",
    product_category: "Subscription",
    product_profile: "general",

    cus_name: "Pavel",
    cus_email: "pavel@gmail.com",
    cus_add1: "Sylhet",
    cus_city: "Sylhet",
    cus_country: "Bangladesh",
    cus_phone: "01700000000",
  };

  const sslcz = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    false
  );

  try {
    const apiResponse = await sslcz.init(data);

    return res.status(200).json({
      url: apiResponse.GatewayPageURL,
    });
  } catch (error) {
    console.log(error);
  }
};