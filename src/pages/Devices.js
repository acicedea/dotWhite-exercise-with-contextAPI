import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { data } from "../data/devices";
import CustomCard from "../components/CustomCard";
import { AppContext } from "../utils/context";
import SideSection from "../components/SideSection";

const useStyles = makeStyles(() => ({
  gridRoot: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    margin: "50px 20px 0 20px",
  },
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%",
    padding: 5,
  },
}));

const Devices = () => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);
  const [mainContentGridXs, setMainContentGridXs] = useState(11);
  const [sidePanelGridXs, setSidePanelGridXs] = useState(1);
  const dataSource = "devices";

  //function to display a list a cards based on the data from devices.js
  const cardList = () => {
    return data.map((item) => (
      <Grid key={item.key} item>
        <CustomCard data={item} />
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
        <Grid item className={classes.gridRoot} xs={mainContentGridXs}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {cardList()}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={sidePanelGridXs}>
          <SideSection />
        </Grid>
      </AppContext.Provider>
    </div>
  );
};

export default Devices;
