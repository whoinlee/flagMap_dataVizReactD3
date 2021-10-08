import React from 'react';
import { useGeoData1 } from '../utils/useGeoData1';
import { useColorData } from '../utils/useColorData';
import { useFlagData } from '../utils/useFlagData';
//-- Components
import MapMarks from './marks/MapMarks';
//-- Styles
import "../styles/WorldMap.css";


const width=980;
const height=560;

const WorldMapWithFlags = () => {
  const data = useGeoData1();
  const colorData = useColorData();
  const flagData = useFlagData();

  if (!data || !colorData || !flagData) {
    return <pre>Loading ... </pre>
  } 

  console.log("data::\n", data);
  console.log("flagData::\n", flagData);
  return ( 
    <div className="container">
      <svg width={width} height={height}>   
          <MapMarks data={data} colors={colorData} flagData={flagData} />
      </svg>
    </div>)
};

export default WorldMapWithFlags;
