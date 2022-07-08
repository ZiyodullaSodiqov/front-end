import React, {forwardRef} from 'react';
import TableStil from '../components/tableStil';
import './index.css'

const  PaySlip = forwardRef(({},ref) =>{
    return (
        <div className="PaySlip-container" style={{display: 'none'}}>
            
            <div className='PaySlip' ref={ref}>
                <div className="header">
                    <h3>To'lov uchun kvitansiya</h3>
                    <p>(To'lovni ariza topshirishdan oldin to'lagan bo'lishingiz shart!)</p>
                </div>
                <TableStil/>
                <hr />
                <TableStil/>
            </div>
        </div>
    );
})

export default PaySlip;