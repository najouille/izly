import React from 'react'

const Datetime = ()=>
{
    var showdate = new Date();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours() + ':' + showdate.getMinutes();
    return(
        <div>
            <p>Solde au {dt} - {displaytime}</p>
        </div>
    );
}

export default Datetime;