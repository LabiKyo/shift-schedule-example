import React from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import "./App.css";
import { Container } from "./Container";

function App() {
  return <MuiPickersUtilsProvider utils={DateFnsUtils}><Container /></MuiPickersUtilsProvider>;
}

export default App;
