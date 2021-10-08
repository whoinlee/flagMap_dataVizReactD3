import React from 'react';
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


const MapMarks1 = ({data, colors, cities, sizeScale, sizeValue}) => {
    const colorLength = (colors != null)? colors.length : 0;
    return (
        <g className="marks" >
            <path className="sphere" d={path({type: 'Sphere'})} />
            <path className="graticules" d={path(graticule())} />
            {data.features.map((feature, i) => (
                <path   key={i} d={path(feature)} 
                        fill={(feature.properties.name==="Antarctica") ? "black" : colors[Math.floor(Math.random()*colorLength)]}>
                    <title key={feature.properties.name}>{feature.properties.name}</title>
                </path>
                )
            )}
            {/* {(cities != null)? cities.map((city, i) => {
                const [x, y] = projection([city.lng, city.lat]);
                return <circle key={i} className="city" cx={x} cy={y} r={sizeScale(sizeValue(city))} />
            }) : null} */}
        </g>
    )
}

/*fill={d.data['RGB hex value']}*/
export default MapMarks1;