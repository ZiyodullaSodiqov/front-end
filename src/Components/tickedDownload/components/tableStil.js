import React from 'react';

function TableStil() {
    return (
        <div className='payment-table'>
            <table>
                <tbody>
                    <tr >
                        <td className={'left border-br'}>
                            <tr style={{ top: 0 }}><td>XABARNOMA</td></tr>
                            <tr style={{ bottom: 0 }}><td>Xazinachi</td></tr>
                        </td>
                        <td className={'right border-br'}>
                            <div className='border-br'>
                                <tr><td><span>TKTI shg'hv: 400 910 860 262 777 094 100 079 002</span></td></tr>
                                <tr><td><span>O'zbekiston Respublikasi Moliya vazirligi G'aznachiligi</span></td></tr>
                            </div>
                            <div className='border-br' style={{ display: 'flex', width: '100%' }}>
                                <tr className='border-br' style={{ background: 'red', width: '85%' }}>
                                    <tr style={{ display: 'flex' }}>
                                        <td className='border-br'>Bank nomi</td>
                                        <td className='border-br'>MB Toshkent sh. Bosh boshqarmasi HKKM</td>
                                    </tr>
                                    <tr>
                                        <td className='border-br'>Bank kodi</td>
                                        <td className='border-br'>00014</td>
                                        <td className='border-br'>STIR</td>
                                        <td className='border-br'>201122919</td>
                                    </tr>
                                    <tr style={{ display: 'flex' }}>
                                        <td className='border-br'>To'lovchi</td>
                                        <td colSpan={3} className='border-br'>Bu menman imzo_________</td>
                                    </tr>
                                </tr>
                                <span className='border-br' style={{ width: '15%' }}>
                                    <span>salom</span> <br />
                                    <span>salom</span> <br />
                                    <span>salom</span> <br />
                                    {/* <span>salom</span>  */}
                                </span>
                            </div>
                            <div className='border-br'>
                                TKTI STIR: 201053370
                                <tr>
                                    <td className='border-br'>To'lov turi</td>
                                    <td className='border-br'>Jami</td>
                                </tr>
                                <tr>
                                    <td className='border-br'>Test sinovlarida ishtirok etish uchun</td>
                                    <td className='border-br'>150 000.00</td>
                                </tr>
                                bir yuz ellik ming so'm nol tiyin
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableStil;