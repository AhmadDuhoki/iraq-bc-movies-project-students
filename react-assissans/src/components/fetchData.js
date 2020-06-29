import React, { useState, useEffect } from "react";

export default function FetchData(props) {
  //this function create the url to fetch
  const e = () => {
    if (isLoading) {
      // console.log(constructUrl(props.path, props.query));
      fetch(constructUrl(props.path, props.query))
        .then(res => res.json())
        .then(res => {
          if (res.hasOwnProperty(props.dataType)) {
            setData(res[props.dataType]);
            // console.log(res[props.dataType]);
          } else setData(res);
        })
        .catch(err => {
          console.log(err);
        });

      return data;
    }
  };
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}${query}`;
  };
  //useStata is used to check state changes
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(constructUrl(props.path,props.query))
  // useEffect is a function in hook that will be called every time we render the component in this case every time when we call FetchData

  if (isLoading) {
    e();
    setIsLoading(false);
  }
  const setLoadingToTrue = () => {
    setIsLoading(true);
  };
  const setLoadingToFalse = () => {
    setIsLoading(false);
  };
  return data;
}
