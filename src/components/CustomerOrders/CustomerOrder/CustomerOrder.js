import React from 'react';
import Classes from './CustomerOrder.css'

const customerOrder=(props)=>{
    return(
            <tr className={Classes.customerOrd}>
                <th>{props.id}</th>
                <td>{props.CustomerName}</td>
                <td>{props.TestName}</td>
                <td>{props.Rate}</td>
                <td>{props.DateTime}</td>
                <td><a href="/viewReports/1">Upload</a></td>
            </tr>
    )
}

export default customerOrder;