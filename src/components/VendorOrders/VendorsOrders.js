import React from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Classes from './VendorOrders.css';

import VendorOrder from './VendorOrder/VendorOrder'

const vendorOrders=()=>{
    return(
        <div>
            <PageLayout 
            Heading="VENDOR DASHBAORD"
            Subtitle1="Home"
            Subtitle2="Vendor Dashboard"/>
            <div className={Classes.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Customer Name</th>
                            <th>TestName</th>
                            <th>DateTime</th>
                            <th>Upload LabReports</th>
                            <th>View reports</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <VendorOrder
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

export default vendorOrders;