import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../data/contracts";
import Grid from "@material-ui/core/Grid";
import CustomAccordion from "../components/CustomAccordion";
import SideSection from "../components/SideSection";
import { AppContext } from "../utils/context";

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    margin: "50px 20px 0 20px",
  },
  mainGrid: {
    margin: "50px 20px 0 20px",
  },
  h1: {
    marginTop: 50,
    marginLeft: 10,
    color: "#0854e8",
  },
}));

const Contracts = () => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);
  const [mainContentGridXs, setMainContentGridXs] = useState(11);
  const [sidePanelGridXs, setSidePanelGridXs] = useState(1);
  const dataSource = "contracts";

  const accordionsList = () => {
    return data.map((item) => (
      <Grid key={item.key} item>
        <CustomAccordion data={item} />
      </Grid>
    ));
  };

  return (
    <div className={classes.gridRoot}>
      <AppContext.Provider
        value={{
          selectedItems,
          setSelectedItems,
          setMainContentGridXs,
          setSidePanelGridXs,
          dataSource,
        }}
      >
        <Grid item xs={mainContentGridXs} className={classes.mainGrid}>
          <Grid container spacing={1}>
            {accordionsList()}
          </Grid>
        </Grid>
        <Grid item xs={sidePanelGridXs}>
          <SideSection />
        </Grid>
      </AppContext.Provider>
    </div>
  );
};

export default Contracts;
