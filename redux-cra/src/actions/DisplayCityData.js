import './fetch.js';
export const DisplayCityDataAction = () => dispatch => {
    dispatch({
     type: 'DisplayCityData',
     payload: fetch.DisplayCityDataAction()
    })
   }