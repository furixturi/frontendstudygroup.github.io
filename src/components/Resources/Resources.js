import { React, useEffect, useState } from 'react';
import '../../assets/css/App.css';
import './Resources.css';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";
import Toggle from "../Toggle";
import Disclaimer from "../Disclaimer/Disclaimer";

export default function Resources() {

  /* 
  Thank you Sunitha! 
  For letting me borrow the code that fetches data dynamically!
  https://github.com/sunithapatel/cloud-workshop-serverless/blob/main/ui/src/components/Resources/Resources.js
  */

  const [resources, setResources] = useState([]);
  // const apiURL = 'https://9hvgvee9e9.execute-api.ap-northeast-1.amazonaws.com/dev/resources'
  const apiURL = ''
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const json = await response.json();
        const resources = JSON.parse(json.body)
        setResources(resources);

      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="container">
      <Toggle />
      <div className="grid">
        {
          // ResourcesList.map(resource =>
          resources.map(resource =>
            <article key={resource.id}>
              <h1>{resource.name}</h1>
              <p className="text">{resource.body}
              </p>
              <Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>

            </article>)}
      </div>
      <Disclaimer />
    </div>
  );
}