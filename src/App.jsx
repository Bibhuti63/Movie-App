import { useState, useEffect } from 'react'

import { fetchDataFromApi } from "./util/api"

import { useSelector, useDispatch } from 'react-redux'

import { getApiConfiguration } from './store/homeSlice';

function App() {

  const dispatch = useDispatch();
  const {url}=useSelector((state)=>state.home);
  console.log(url);

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

  return <div className='app'>
    App
    {
      url?.total_pages
    }
    </div>

}

export default App
