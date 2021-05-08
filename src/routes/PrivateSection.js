import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Column, Row } from "simple-flexbox";
import Header from "../Components/Header1/Header";
import PrivateRoute from "./PrivateRoute";
import TopHeader from "../Components/Header1/TopHeader";
const useStyles = createUseStyles({
  container: {
    height: "100%",
    overflow: "hidden",
    // minHeight: 850,
  },
  mainBlock: {
    // marginLeft: 255,

    "@media (max-width: 1080px)": {
      marginLeft: 0,
    },
  },
  darkMain: {
    backgroundColor: "black",
  },
  contentBlock: {
    marginTop: 0,
    height: "92vh",
    overflowY: "auto",
    overflowX: "hidden",
    padding: 20,

    "@media (max-width: 768px) ": {
      marginLeft: 0,
      width: "380px",
    },
  },
});

function PrivateSection() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  //const themeData = JSON.parse(window.localStorage.getItem("themeValue"));

  return (
    <Row className={classes.container}>
      <Header />
      <Column flexGrow={1} className={classes.mainBlock}>
        <TopHeader />
        <div className={classes.contentBlock}>
          <PrivateRoute />
        </div>
      </Column>
    </Row>
  );
}

export default PrivateSection;
