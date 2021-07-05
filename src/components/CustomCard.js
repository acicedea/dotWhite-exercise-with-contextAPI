import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { AppContext } from "../utils/context";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    maxWidth: 300,
    minHeight: 200,
    position: "relative",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    position: "absolute",
    bottom: 20,
  },
}));

const CustomCard = ({ data }) => {
  const classes = useStyles();
  const { setSelectedItems, selectedItems } = useContext(AppContext);

  //callback function to set a state with selected keys
  const handleOnCardSelect = () => {
    //check if data is already selected
    if (selectedItems.indexOf(data) < 0)
      setSelectedItems((old) => [...old, data]);
  };

  return (
    <div>
      <Card className={classes.root} key={data.key}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.author}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {data.timestamp}
          </Typography>
          <Typography variant="body2" component="p">
            {data.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleOnCardSelect}
            className={classes.button}
            disable={selectedItems.indexOf(data) > -1 ? true : false}
          >
            {selectedItems.indexOf(data) > -1 ? "Already selected" : "Select"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
