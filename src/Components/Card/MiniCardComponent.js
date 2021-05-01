import React from "react";
import { Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
    border: `1px solid ${theme.color.lightGrayishBlue2}`,
    borderRadius: 4,
    cursor: "pointer",
    maxWidth: 350,
    padding: "16px 32px 16px 32px",
    boxShadow: "4px 4px 8px #000000, -4px -4px 9px 0px #ffffff",
    "&:hover": {
      borderColor: theme.color.lightBlue,
      "&:nth-child(n) > span": {
        color: theme.color.lightBlue1,
      },
    },
  },
  title: {
    ...theme.typography.cardTitle,
    color: theme.color.grayishBlue2,
    marginBottom: 12,
    minWidth: 102,
    textAlign: "center",
    borderBottom: "1px solid white",
  },
  value: {
    color: theme.color.veryDarkGrayishBlueWhite,
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: "1px",
    lineHeight: "50px",
    textAlign: "center",
  },
}));

function MiniCardComponent({ className = "", title, value }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const composedClassName = [classes.container, className].join(" ");
  return (
    <Column
      flexGrow={1}
      className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <span className={classes.title}>{title}</span>

      <span className={classes.value}>{value}</span>
    </Column>
  );
}

export default MiniCardComponent;
