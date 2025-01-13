import React from "react";

const PaymentPage = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in smallest currency unit (e.g., 50000 paise = ₹500)
      currency: "INR",
      name: "House of IP",
      description: "Trademark Registration Fee",
      image: "https://example.com/your-logo.png", // Replace with your logo URL
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log("Payment Response:", response);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "293, Lane-2, Westend Marg, Near Saket Metro Station",
      },
      theme: {
        color: "#1E293B", // Customize the theme color
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePayLater = () => {
    alert(
      "Your documents have been received. However, your application will not be considered until payment is completed. Please contact us at support@houseofip.in for more information."
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-slate-100 text-center mb-4">
          Payment Options
        </h1>
        <p className="text-slate-300 text-center mb-6">
          Complete your payment for <span className="font-semibold">Trademark Registration</span>.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={handlePayment}
            className="bg-slate-700 text-slate-100 text-lg px-6 py-3 rounded hover:bg-blue-600 transition font-medium w-full"
          >
            Pay Now
          </button>
          <button
            onClick={handlePayLater}
            className="bg-slate-700 text-slate-300 text-lg px-6 py-3 rounded hover:bg-slate-600 transition font-medium w-full"
          >
            Pay Later
          </button>
        </div>
        <div className="text-sm text-slate-400 mt-6 text-center">
          Need help? Contact us at{" "}
          <a
            href="mailto:support@houseofip.com"
            className="text-blue-400 hover:underline"
          >
            support@houseofip.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
