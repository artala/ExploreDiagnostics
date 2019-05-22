import React from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Classes from './CustomerOrders.css';

import CustomerOrder from './CustomerOrder/CustomerOrder'

const customerOrders=()=>{
    return(
        <div>
            <PageLayout 
            Heading="CUSTOMER DASHBAORD"
            Subtitle1="Home"
            Subtitle2="Customer Dashboard"/>
            <div className={Classes.container}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Sno</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">TestName</th>
                            <th scope="col">Rate</th>
                            <th scope="col">DateTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomerOrder
                        id="1"
                        CustomerName="vikranth"
                        TestName="HBA1C (GLYCOSYLATED HAEMOGLOBIN)-WHOLE BLOOD"
                        Rate="500"
                        DateTime="Apr-07-2019 13:4"/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default customerOrders;