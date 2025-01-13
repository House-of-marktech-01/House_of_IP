import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
const DesignForm = () => {
  return (
    <div className="pt-20 py-20">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/107868914454572315900/form/1FAIpQLSeYhmpxNlgEONqcxIUSY7Qi2Jxsm3GaymVOD1dUu2QndfQruA/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default DesignForm;
