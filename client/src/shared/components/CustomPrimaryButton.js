import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
  let addStyles = { ...additionalStyles };
  if (disabled) {
    addStyles.backgroundColor = "";
  }
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#6c44fc",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={addStyles ? addStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
