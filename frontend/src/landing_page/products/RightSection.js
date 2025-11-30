import React from 'react';

function RightSection({
     imageUrl,
  productName,
  productDescription,
  learnMore
 
}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h2 className='mt-5 '>{productName}</h2>
                    <p>{productDescription}</p>
                    <p><a href={learnMore} >Learn More</a></p>
                </div>
                <div className='col-6 p-2'>
                    <img src={imageUrl} alt={productName}  />
                </div>
            </div>
        </div>
    );
}

export default RightSection;