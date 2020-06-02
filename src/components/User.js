import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SetSubscriptionForm from './Forms/SetSubscriptionForm';
import ListButton from './Forms/ListButton';
// import DatePicker from "react-datepicker";
import Calendar from './Forms/DatePicer';
import Axios from 'axios';

const baseUrl = 'http://34.215.163.120:80'
const token = '';

function getUser({ id }) {
    return Axios({
        method: 'get',
        url: `${baseUrl}/admin/users/${id}`,
        headers: {
            'Auth': `Bearer ${token}`
        }
    })
}


    const User = ()=> {

        const { id } = useParams(); 

        const [loading, setLoading] = useState(true);

        const [user, setUser] = useState(null);

        useEffect(() => {
            // on mount
            setLoading(true);
            getUser({ id }).then(response => {
                console.log(response)
                setUser(response.data);
                setLoading(false);
            })
            return () => {
                // on unmount
            }
        }, [id])

        if (loading) return <span>Loading…</span>;
        
        return (
            <div>
                <section>
                    <div className='list-button'>
                        <ListButton/>
                    </div>
                </section>
                <section>
                </section>
                <div className='tile is-parent is-3'>
                    <div className='tile is-child box'>
                        <p>
                            <b>Name: {user.name}  {id} </b>
                            
                        </p>
                        <p>
                            <b>City:Lviv </b>
                            
                        </p>
                        <p>
                            <b>Email: V_Neck@ukr.net</b>
                            
                        </p>
                        <p>
                            <b>subscription: active</b>
                            <div>
                               < Calendar/>
          
                            </div>
                            {/* <CheckList/> */}
                             {/* <ValidDataForm/>  */}
                            <SetSubscriptionForm/>
                            {/* <DataRange/> */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }



export default User;
