import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({}));
const CustomeButton = ({ color, background, text }) => {
  const classes = useStyles();
  return <Button>{text}</Button>;
};

export default CustomeButton;
