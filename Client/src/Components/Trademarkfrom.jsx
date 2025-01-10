import React,{useState} from 'react';

const TrademarkForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        fatherName: '',
        businessName: '',
        businessType: '',
        businessAddress: '',
        trademarkName: '',
        brandUsage: '',
        products: '',
        trademarkLogo: null,
        startupCertificate: null,
      });
    
      const scriptURL = 'https://script.google.com/macros/s/AKfycby3kaK-nA2vl73AALqoROLE9xHSQw0kmemL3cny9b-RCsxAxbNQueLGdufEsCMjxwk5bQ/exec';
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleFileChange = (e) => {
        const { id, files } = e.target;
        setFormData({ ...formData, [id]: files[0] });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Prepare data for submission
        const payload = {
          ...formData,
          trademarkLogo: formData.trademarkLogo ? formData.trademarkLogo.name : '',
          startupCertificate: formData.startupCertificate ? formData.startupCertificate.name : '',
        };
    
        try {
          const response = await fetch(scriptURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Error submitting form.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again.');
        }
      };
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-roboto">
      <div className="bg-slate-800 shadow-md rounded-lg p-8 w-full max-w-3xl mt-20">
        <h2 className="text-2xl font-bold text-white font-serif text-center mb-6">Trademark Registration Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="fullName">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 p-3 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Complete Address */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="address">
              Complete Address (as per AADHAR) *
            </label>
            <textarea
              id="address"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your complete address"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="phone">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="fatherName">
              Father's Name *
            </label>
            <input
              type="text"
              id="fatherName"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your father's name"
              required
            />
          </div>

          {/* Full Legal Business Name */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="businessName">
              Full Legal Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your legal business name"
              required
            />
          </div>

          {/* Type of Business */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="businessType">
              Type of Business *
            </label>
            <input
              type="text"
              id="businessType"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your business type"
              required
            />
          </div>

          {/* Business Address */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="businessAddress">
              Business Address *
            </label>
            <textarea
              id="businessAddress"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your business address"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Trademark Name */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="trademarkName">
              Trademark Name to be Registered *
            </label>
            <input
              type="text"
              id="trademarkName"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the trademark name"
              required
            />
          </div>

          {/* Brand Name Usage */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="brandUsage">
              Using this brand name/mark since? *
            </label>
            <input
              type="text"
              id="brandUsage"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter usage status or 'Proposed to be used'"
              required
            />
          </div>

          {/* Upload Trademark Logo */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="trademarkLogo">
              Upload Trademark Label/Device/Logo (if any)
            </label>
            <input
              type="file"
              id="trademarkLogo"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              accept="image/*,application/pdf"
            />
          </div>

          {/* Products/Services Provided */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="products">
              Products/Services Provided by Business *
            </label>
            <input
              type="text"
              id="products"
              className="w-full border-gray-300 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Clothing, Medical services"
              required
            />
          </div>

          {/* Upload Startup Certificate */}
          <div>
            <label className="block text-gray-100 font-medium mb-2" htmlFor="startupCertificate">
              In case of Startup or MSME, upload startup certificate/Udyam Certificate
            </label>
            <input
              type="file"
              id="startupCertificate"
              className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              accept="image/*,application/pdf"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrademarkForm;
