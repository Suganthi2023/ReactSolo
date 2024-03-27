
function PackageFilter({textinput,handleTextInput,typeSelect,miniPrice,maxiPrice,miniRating,maxiRating,
                        miniDuration,maxiDuration,handleTypeSelect,handleMiniPrice,handleMaxiPrice,
                        handleMiniRating,handleMaxiRating,handleMiniDuration,handleMaxiDuration,handleSearch}){
    

    return(
        <>
            <div>
                <form onSubmit={handleSearch}>
                    
                    <select id="selecttype" value={typeSelect} onChange={handleTypeSelect}>
                        <option value="Destination">Destination</option>
                        <option value="Rating">Rating</option>
                        <option value="Duration">Duration(inhrs)</option>
                        <option value="Price">Price</option>
                    </select>
                    {typeSelect === "Destination"&&(
                        <>
                            <label>Destination:</label>
                            <input type="text" name="name" value={textinput} onChange={handleTextInput}/>
                        </>
                    )}
                    {typeSelect === "Price"&&(
                        <>
                            <label>Min Price:</label>
                            <input type="number" value={miniPrice} onChange={handleMiniPrice}/>
                            <label>Max Price:</label>
                            <input type="number" value={maxiPrice} onChange={handleMaxiPrice}/>
                        </>
                    )}
                    {typeSelect === "Rating"&&(
                        <>
                            <label>MinRating:</label>
                            <input type="number" value={miniRating} onChange={handleMiniRating}/>
                            <label>MaxRating:</label>
                            <input type="number" value={maxiRating} onChange={handleMaxiRating}/>
                        </>
                    )}
                    {typeSelect === "Duration"&&(
                        <>
                            <label>MinDuration:</label>
                            <input type="number" value={miniDuration} onChange={handleMiniDuration}/>
                            <label>MaxDuration:</label>
                            <input type="number" value={maxiDuration} onChange={handleMaxiDuration}/>
                        </>
                    )}
                    <button type="submit">Search</button>
                </form>
            </div>

        </>
    )
}

export default PackageFilter;