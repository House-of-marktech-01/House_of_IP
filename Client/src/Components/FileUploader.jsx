import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

const FileUploader = () => {
  return (
    <div>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/110495295342038558588/form/1FAIpQLSeEM92QbUhFE-BDgERQ0WsIQZJR6TVQS6xmrrplZK067qVc6g/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default FileUploader;
