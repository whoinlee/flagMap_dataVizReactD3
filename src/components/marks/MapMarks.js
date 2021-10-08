import React from 'react';
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


const MapMarks = ({data, colors, flagData}) => {
    const colorLength = (colors != null)? colors.length : 0;
    return (
        <g className="marks" >
            <path className="sphere" d={path({type: 'Sphere'})} />
            <path className="graticules" d={path(graticule())} />
            {data.features.map((feature, i) => {
                let flagUrl = 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg';
                const countryName = feature.properties.name;
                // const flagObj = flagData.find( ({ Country }) => Country === countryName );
                // if (flagObj) {
                //     flagUrl = flagObj.Flag_url;
                //     // console.log("flagObj is ,,,, ", flagObj);
                //     if (flagUrl && countryName == "Brazil") console.log("flagUrl is ,,,, ", flagUrl);
                // } else {
                //     console.log("???????? ever ????????? ", countryName)
                // }
                return (
                    <path   key={i} d={path(feature)} 
                            fill={`url(${flagUrl})`}>
                        <title key={countryName}>{countryName}</title>
                    </path>
                )})
            }
        </g>
    )
}

/*fill={d.data['RGB hex value']}*/
{/* <path   key={i} d={path(feature)} 
fill={(countryName === "Brazil") ? 'url(https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg)'
: colors[Math.floor(Math.random()*colorLength)]}> */}
export default MapMarks;