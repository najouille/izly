import React from 'react'

const Datetime = ()=>
{
    var showdate = new Date();
    var displaytodaysdate = 'Solde au ' + showdate.getDate() + ' ' + showdate.getMonth() + ' ' + showdate.getFullYear();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours() + ':' + showdate.getMinutes();
    return(
        <div>
            <p>{displaytodaysdate}</p>
            {dt} - {displaytime}
        </div>
    );
}

export default Datetime;