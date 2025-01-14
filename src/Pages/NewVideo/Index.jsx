import React from "react";
import FormComponent from "../../components/Form/Index"; 
import { Form as RouterForm } from "react-router-dom"; 

const NewVideo = () => {
  return (
    <div>
      {/* Usa FormComponent para referirte a tu componente */}
      <FormComponent />
    </div>
  );
};

export default NewVideo;