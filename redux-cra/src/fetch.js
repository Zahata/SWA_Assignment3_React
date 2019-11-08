import {DisplayCityDataAction} from './actions';

function fetchCityData(){
    return dispatch =>{
        dispatch(DisplayCityDataAction());
        fetch('http://localhost:8080/data')
        .then(res=> res.json())
        .then(res=>{
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchCityData(res))
            return res
        })
    }
}