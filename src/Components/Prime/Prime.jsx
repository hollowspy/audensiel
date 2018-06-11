import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './Prime.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
  },
});

class Prime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    let value = parseInt(this.state.value, 10);
    e.preventDefault();
    function getNthPrimeNumber(value) {
      let count = 0;
      let num = 1;
      while (count++ !== value) {
        num = getNextPrimeNumber(num);
      }
      return num;
    }

    function getNextPrimeNumber(value) {
      for (let i = ++value; i < value * value; i++) {
        if (isPrime(i)) return i;
      }
      return 0;
    }

    function isPrime(value) {
      for (let i = 2; i < value; i++) if (value % i === 0) return false;
      return true;
    }

    this.setState({
      result: getNthPrimeNumber(value),
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="containerBody">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h3> Vous aussi vous aimez bien être premier ?</h3>
              <form className="formulaire" onSubmit={this.handleSubmit}>
                <label>
                  Saisissez un nombre
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Calculez" />
              </form>
              <div>
                {this.state.value === '' ? (
                  <div>Quel sera le résultat ?</div>
                ) : (
                  <div>
                    {this.state.value} est le {this.state.result}ième nombre
                    premier !
                  </div>
                )}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Prime);
