import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
const CopyrightForm = () => {
  return (
    <div className="pt-20 py-20">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/107868914454572315900/form/1FAIpQLSelv-eb3h8N8SQhUcDyVefJ_CTogzDEwLzS3KX4wqS1yBvwaQ/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default CopyrightForm;
