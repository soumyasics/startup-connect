import React from 'react'
import './EntrepreneurChat.css'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2'
import inv_chat_search from '../../assets/inv_chat_search.png'
import inv_chat_bell from '../../assets/inv_chat_bell.png'
import inv_chat_love from '../../assets/inv_chat_love.png'
import inv_chat_attachment from '../../assets/inv_chat_attachment.png'
import inv_chat_emoji from '../../assets/inv_chat_emoji.png'
import inv_chat_mic from '../../assets/inv_chat_mic.png'
import inv_chat_send from '../../assets/inv_chat_send.png'
import inv_chat_camera from '../../assets/inv_chat_camera.png'
import profile from "../../assets/Ellipse 5.png"


function EntrepreneurChat() {
    function importData() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
                  console.log(files);
              };
        input.click();
        
      }
  return (
    <>
        <CommonNavbar/>
        <HomepageNavbar/>
        <div className='container ent_chat_con mb-5'>
                <section className='ent_chat_box mt-5'>
                    <div className='col ent_chat_nav'>
                        <img src={profile} className='ent_chat_profile' />
                        <h3 className=' ent_chat_name'>Entrepreneur Name</h3>
                        <button className='ent_chat_nav_btn'><img className='ent_chat_nav_icon' src={inv_chat_search}/></button>
                        <button className='ent_chat_nav_btn'><img className='ent_chat_nav_icon' src={inv_chat_love}/></button>
                        <button className='ent_chat_nav_btn'><img className='ent_chat_nav_icon' src={inv_chat_bell}/></button>
                    </div>
                    <div className='container '>
                        <table className='mt-2 '>
                            <tr className=''>
                                <td className='ent_chat_message_left'>
                                    <p className='px-3 pt-2'>Hello, How are you</p>
                                    </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='ent_chat_message_right'>
                                    <p className='px-3 pt-2'>Hai , fine Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </td>
                            </tr>
                        </table>
                    </div>
                </section>
                
                <section>
                    <div className='ent_chat_foot'>
                    <button className='ent_chat_foot_btn mx-2' onClick={importData}><img className='ent_chat_nav_icon' src={inv_chat_attachment}/></button>
                    <button className='ent_chat_foot_btn'><img className='ent_chat_nav_icon' src={inv_chat_emoji}/></button>
                    <div className ='ent_chat_foot_input_div'>
                    <button className='ent_chat_foot_mic'><img className='ent_chat_nav_icon' src={inv_chat_mic}/></button>
                        <input type='text' placeholder='Write Something'/></div>
                    
                    <button className='ent_chat_foot_btn'><img className='ent_chat_nav_icon' src={inv_chat_camera}/></button>
                    <button className='ent_chat_foot_btn'><img className='ent_chat_nav_icon' src={inv_chat_send}/></button>
                    </div>
                </section>

            </div>
        <Footer_2/>
    </>
  )
}

export default EntrepreneurChat