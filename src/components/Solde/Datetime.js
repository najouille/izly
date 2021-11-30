import dayjs from 'dayjs';
import React from 'react';
import 'dayjs/locale/fr';

const Datetime = ()=>
{
    // var showdate = new Date();
    // var dt = showdate.toDateString();
    // var displaytime = showdate.getHours() + ':' + showdate.getMinutes();
    return(
        <div>
            <p>Solde au {dayjs().locale('fr').format('dddd D MMMM YYYY | HH:mm')}</p>
        </div>
    );
}

export default Datetime;