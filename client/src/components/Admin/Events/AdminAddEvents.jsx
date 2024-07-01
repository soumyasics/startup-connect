import React from 'react'
import './AdminAddEvents.css'
import AdminFooter from '../AdminFooter'
import AdminNavbar from '../AdminNavbar'

function AdminAddEvents() {
  return (
    <>
    <AdminNavbar/>
    <div className="text-center ">
            <h4 className="  mt-3  ad_addevent_mainheading"> OUR EVENTS</h4>
            <h3 className="ad_addevent_sub_h3">Events </h3>
            <div className="  mb-5  ad_addevent_hr_line "></div>
    </div>
    <section className='container'>
        <div className='ad_addevent_div'>
            <form className='px-5 pt-4'>
                <div className='row pt-4'>
                    <div className='col'>
                        <table>
                            <tr>
                                <th className='px-2'>Event Name:</th>
                                <td><input className='ad_addevent_input' type='text'/></td>
                            </tr>
                            <tr>
                                <th className='px-2'>Event Date:</th>
                                <td><input className='ad_addevent_input_date mt-3' type='date'/></td>
                            </tr>
                            <tr>
                                <th className='px-2 pt-3'>Event Time:</th>
                                <td><input className='ad_addevent_input mt-3' type='time'/></td>
                            </tr>
                            <tr>
                                <th className='px-2'>Event Location:</th>
                                <td><input className='ad_addevent_input_date mt-3' type='date'/></td>
                            </tr>
                            
                            <tr>
                        </tr>
                        </table>

                    </div>
                    <div className='col'>
                        
                        <tr>
                            <th className='px-2'>Event Organizer Name:</th>
                            <td><input className='ad_addevent_input' type='text'/></td>
                        </tr>
                        <tr>
                            <th className='px-2'>Organizer Contact Number:</th>
                            <td><input className='ad_addevent_input mt-2' type='text'/></td>
                        </tr>
                        <tr>
                            <th className=' px-2'>Event Description:</th>
                            <td><textarea className='ad_addevent_input_des'/></td>
                        </tr>
                        <tr>
                        </tr>
                    </div>
                    
                </div>
                <button className='ad_addevent_addbtn'>Add Events</button>
                <button className='ad_addevent_cancelbtn'>Cancel</button>

            </form>
        </div>
    </section>
    <AdminFooter/>
    </>
  )
}

export default AdminAddEvents