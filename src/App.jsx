import { useState, useEffect } from 'react'

import { fetchDataFromApi } from "./util/api"

import { useSelector, useDispatch } from 'react-redux'

import { getApiConfiguration } from './store/homeSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/popular")
      .then((response) => {
        console.log(response);
        dispatch(getApiConfiguration(response));
      });
  }

  return <div className='app'>App</div>

}

export default App
