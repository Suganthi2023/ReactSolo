

function PackageList({lists}){

    return(
        /* Displaying the Available package cards to the user from mockapi*/
       <>
            <div>
                <h2>Our Travel Package List</h2>
                {lists.map(list=>(
                    <div className="card" key={list.id}>
                        
                        <p>Destination: {list.Destination}</p>
                        <p>Duration(in hrs): {list.Duration}</p>
                        <p>Rating: {list.Rating}</p>
                        <p>Price: ${list.Price}</p>
                        <p>Seats Available: {list.SeatsAvailable}</p>
                        <button>Book</button><br/><br/>
                    </div>
                   
                ))}
            </div>
        </>
        

    )
        
    
}
export default PackageList;