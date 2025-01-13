import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { useNavigate } from "react-router-dom";

const Trademarkfrom = () => {
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    console.log("Form submitted");
    navigate("/payment"); // Redirect to the /payment page
  };

  return (
    <div className="pt-20 py-20">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/107868914454572315900/form/1FAIpQLScU21_EuxVajsBpYFjK02wvYpewwwLo1-2sMsi6CQkGXTvtwQ/classic.js/?div=ff-compose"
        onSubmitForm={handleFormSubmit}
      />
    </div>
  );
};

export default Trademarkfrom;
