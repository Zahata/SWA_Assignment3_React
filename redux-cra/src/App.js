import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DisplayCityDataAction } from './actions/DisplayCityData';
import './App.css';

const mapStateToProps = state => ({
  ...state
 })
     const mapDispatchToProps = dispatch => ({
  DisplayCityDataAction: () => dispatch(DisplayCityDataAction())
 })

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
 render() {
  return (
   <div>
     <p><b>WEATHER DATA REPORT</b></p>
    <div id="DisplayData">
    <form>
        <label>
        Place : <select>
        <option value = "Horsens">Horsens</option>
        <option value ="Aarhus">Aarhus</option> 
        <option value ="Copenhagen">Copenhagen</option>
        </select>
        </label>
      </form><br></br>
      <textarea id="display_data" ></textarea><br></br>
      <p><b>Data in interval</b></p>
      <form>
        <label>
        Start Interval(Year-Month-Date) : <input type ="date"></input><br></br>
        End Interval(Year-Month-Date) : <input type ="date"></input>
        </label><br></br>
      </form>
      <button id="display" onClick={this.DisplayAction}>Display</button><br></br>
      <textarea id="display_data" >
        The data from weather will display here 
      </textarea><br></br>
    </div>
    <br></br>
  
    <div id="PostData">
      <p><b>POST/REPORT DATA</b></p>
    <form>
        <label>
        Type : <select>
        <option value = "percipitation">percipitation</option>
        <option value ="temperature">temperature</option> 
        <option value ="cloud coverage">cloud coverage</option>
        <option value ="wind speed">wind speed</option>
        </select><br></br>
        Date Interval(Year-Month-Date) :<input type = "date"></input><br></br>
        Place : <select>
        <option value = "Horsens">Horsens</option>
        <option value ="Aarhus">Aarhus</option> 
        <option value ="Copenhagen">Copenhagen</option>
        </select><br></br>
        Value : <input type = "text"></input><br></br>
        Unit : <input type = "text"></input><br></br>
        </label>
      </form>
      <button id="Post" onClick={this.PostAction}>Post</button><br></br>
    </div>

    <br></br>
  
    <button id="Reload" onClick={this.ReloadAction}>Reload</button><br></br>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
