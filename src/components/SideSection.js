import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tabs from "./Tabs/Tabs";
import SidePanel from "./SidePanel";
import { AppContext } from "../utils/context";

const useStyles = makeStyles(() => ({
  gridRoot: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%",
    padding: 5,
  },
}));

const SideSection = () => {
  const classes = useStyles();
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [sidePanelHeaderText, setSidePanelHeaderText] = useState("");
  const { setMainContentGridXs, setSidePanelGridXs } = useContext(AppContext);

  //function called when a side tab is pressed
  const handleSidePanelExpansion = (headerText) => {
    setShowSidePanel(!showSidePanel);
    if (!showSidePanel) {
      setMainContentGridXs(7);
      setSidePanelGridXs(5);
      setSidePanelHeaderText(headerText);
    } else {
      setMainContentGridXs(11);
      setSidePanelGridXs(1);
      setSidePanelHeaderText("");
    }
  };

  return (
    <div className={classes.gridRoot}>
      {showSidePanel && (
        <Grid item xs={11}>
          <SidePanel
            headerText={sidePanelHeaderText}
            onClick={handleSidePanelExpansion}
          />
        </Grid>
      )}
      {/* render tabs which expands side panel */}
      <Grid item xs={1} style={{ marginTop: 50, marginLeft: 10 }}>
        <Tabs
          text="Notes"
          sidePanelVisibility={showSidePanel}
          onClick={handleSidePanelExpansion}
        />
      </Grid>
    </div>
  );
};

export default SideSection;
