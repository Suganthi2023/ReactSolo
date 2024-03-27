
function PackageFilter({textinput,typeSelect,miniPrice,maxiPrice,miniRating,maxiRating,
                        miniDuration,maxiDuration,handleChange}){
    

    return(
        <>
            <div>
                <form>
                    <input type="text" name="name" value={textinput} onChange={handleChange}/>
                    <select id="selecttype" value={typeSelect} onChange={handleChange}>
                        <option value="Destination">Destination</option>
                        <option value="Rating">Rating</option>
                        <option value="Duration">Duration</option>
                        <option value="Price">Price</option>
                    </select>
                    {typeSelect === "Price"&&(
                        <>
                            <label>Min Price:</label>
                            <input type="number" value={miniPrice} onChange={handleChange}/>
                            <label>Max Price:</label>
                            <input type="number" value={maxiPrice} onChange={handleChange}/>
                        </>
                    )}
                    {typeSelect === "Rating"&&(
                        <>
                            <label>Min Price:</label>
                            <input type="number" value={miniRating} onChange={handleChange}/>
                            <label>Max Price:</label>
                            <input type="number" value={maxiRating} onChange={handleChange}/>
                        </>
                    )}
                    {typeSelect === "Duration"&&(
                        <>
                            <label>Min Price:</label>
                            <input type="number" value={miniDuration} onChange={handleChange}/>
                            <label>Max Price:</label>
                            <input type="number" value={maxiDuration} onChange={handleChange}/>
                        </>
                    )}
                </form>
            </div>

        </>
    )
}

export default PackageFilter;