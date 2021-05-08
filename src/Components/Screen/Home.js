import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";
import { getbedInfo } from "../../config/Service/Beds";
import MiniCardComponent from "../Card/MiniCardComponent";
import titleValue from "./titleValue";
import moment from "moment";

const useStyles = createUseStyles((theme) => ({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30,
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0,
    },
  },
  miniCardContainer: {
    backgroundColor: theme.color.total_bed,
  },
  miniCardContainerv: {
    backgroundColor: theme.color.total_bedV,
  },

  miniCardContainero: {
    backgroundColor: theme.color.total_bed0,
  },
  cardTitle: {
    flexGrow: 1,
    marginRight: 70,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none",
    },
  },
  todayTrends: {
    marginTop: 30,
  },
  lastRow: {
    marginTop: 30,
  },
  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0,
    },
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30,
    },
  },
}));

function Home() {
  const classes = useStyles();
  const [bed, setBed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBed();
    const timer = setInterval(() => getBed(), 60 * 1000 * 2);
    return () => clearInterval(timer);
  }, []);

  const getBed = () => {
    getbedInfo(setBed, setLoading);
  };

  const totalBeds = (name) =>
    bed
      .filter((c) => c.bed_type === name)
      .reduce((accumulator, pilot) => {
        var output = accumulator + parseInt(pilot.total);
        return output;
      }, 0);

  const totalVaccent = (name) =>
    bed
      .filter((c) => c.bed_type === name)
      .reduce((accumulator, pilot) => {
        var output = accumulator + parseInt(pilot.vacant);
        return output;
      }, 0);

  const totalOccupid = (name) =>
    bed
      .filter((c) => c.bed_type === name)
      .reduce((accumulator, pilot) => {
        var output = accumulator + parseInt(pilot.occupied);
        return output;
      }, 0);

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <span>
          <strong>Source :</strong> Data reported by Nodal officers of each
          Dedicated COVID-19 hospital &{" "}
          <a
            href="https://coronabeds.jantasamvad.org/"
            target="_blank"
            rel="noreferrer"
          >
            Coronabeds.jantasamvad.org
          </a>
        </span>
        <br></br>
        <span>
          <strong>Last Updated :</strong>{" "}
          {bed
            .slice(0, 1)
            .map((c) =>
              moment(c.updated_at).local().format("YYYY-MM-DD HH:mm")
            )}
        </span>
      </div>
      <Column>
        {loading ? "" : ""}
        <span></span>
        {titleValue.map((c) => (
          <span style={{ marginBottom: "80px" }}>
            <h3 style={{ marginBottom: "0px", textAlign: "center" }}>
              {c.title}
            </h3>
            <hr></hr>
            <Row
              className={classes.cardsContainer}
              wrap
              flexGrow={1}
              horizontal="space-between"
              breakpoints={{ 768: "column" }}
            >
              <Row
                className={classes.cardRow}
                wrap
                flexGrow={1}
                horizontal="space-between"
                breakpoints={{ 384: "column" }}
              >
                <MiniCardComponent
                  className={[
                    classes.miniCardContainer,
                    classes.cardTitle,
                  ].join(" ")}
                  title="TOTAL BEDS"
                  value={totalBeds(c.name)}
                />
                <MiniCardComponent
                  className={[
                    classes.miniCardContainerv,
                    classes.cardTitle,
                  ].join(" ")}
                  title="VACANT BEDS"
                  value={totalVaccent(c.name)}
                />
              </Row>
              <Row
                className={classes.cardRow}
                wrap
                flexGrow={1}
                horizontal="space-between"
                breakpoints={{ 384: "column" }}
              >
                <MiniCardComponent
                  className={[
                    classes.miniCardContainero,
                    classes.cardTitle,
                  ].join(" ")}
                  title="OCCUPIED BEDS"
                  value={totalOccupid(c.name)}
                />
              </Row>
            </Row>
          </span>
        ))}
      </Column>
    </>
  );
}

export default Home;
