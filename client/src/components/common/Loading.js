import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  loadingMessage: {
    top: "50%",
    left: "50%",
    position: "absolute",
    marginLeft: "-52px",
    marginTop: "-35px",
    textAlign: "center"
  }
});

function Loading(props) {
  const { classes, loading } = props;
  return (
    <div style={loading ? { display: 'block' } : { display: 'none' }} className={classes.loadingMessage}>
      <CircularProgress />
      <Typography variant="h6">
        Carregando
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Loading);