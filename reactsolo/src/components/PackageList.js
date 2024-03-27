import React from "react";

function PackageList({lists}){
    return(
       <>
            <div>
                <h2>Our Travel Package List</h2>
                {lists.map(list=>(
                    <div key={list.id}>
                        <p>{list.Image}</p>
                        <p>Destinaton:{list.Destination}</p>
                        <p>Duration(in hrs):{list.Duration}</p>
                        <p>Rating:{list.Rating}</p>
                        <p>Price:${list.Price}</p>
                        <p>Seats Available:{list.SeatsAvailable}</p><br/>
                    </div>
                ))}
            </div>
        </>
        

    )
        
    
}
export default PackageList;