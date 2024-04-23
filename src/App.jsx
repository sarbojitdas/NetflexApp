import React from 'react';
import Card from './Cards';
import sdata from './sdata';






const App= ()=>(
  <>
  <h2 className='heading_style'> List of top 5 Netflex Series in 2020</h2>


  
  
 {sdata.map(function ncard(val,index)
 {
    return (
    <Card 
    key={val.id}
    imgsrc= {val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
 
    />
  );
 })} ;

  </>
);

export default App;