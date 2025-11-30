import React from 'react';

function HeroSupport() {
    return ( 
        //container-fluid as the bootstrap provides the default margin at both left and right ends..which we dont want... so use container fluid
        <section className="container-fluid " id='supportHero'>  
      <div className=" p-5 " id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href=''>Track tickets</a>

      </div>
      <div className=" row   m-3">
        <div className='col-6 p-5'>
            <h1 className='fs-3 mb-4 '>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='E.g. How do I activate F&O?' className='mb-3'/><br/>
            <a href='' style={{marginLeft: "10px", lineHeight: "2"}} >Track account opening</a>
            <a href='' style={{marginLeft: "10px", lineHeight: "2"}}>Track segment activation</a>
            <a href='' style={{marginLeft: "10px", lineHeight: "2"}}>Intraday margins</a><br/>
            <a href='' style={{marginLeft: "10px", lineHeight: "2"}}>Kite user manual</a>
          
        </div>
        <div className='col-6 p-5'>
            <h1 className='fs-3 '>Featured</h1>
            <ol>
                <li> <a href=''  style={{ lineHeight: "2"}} >Current Takeovers & Delisting- January 2025</a></li>
                <li><a href='' style={{ lineHeight: "2"}}>Latest Intraday Leverages - MIS & CO</a></li>
                </ol>
            <a href=''>Current Takeovers & Delisting- January 2025</a>
            <a href=''>Latest Intraday Leverages - MIS & CO</a>
        </div>
     

      </div>
      </section>
    );
}

export default HeroSupport;



