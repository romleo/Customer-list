import React from 'react';
// import { useParams } from "react-router-dom";
// import SearchField from "react-search-field";
import SignupForm from './Forms/SignupForm';
import ListButton from './Forms/ListButton';
// import ValidDataForm from './Forms/ValidDataForm';
// import DataRange from './Forms/DataRange';
// import CheckList from './Forms/CheckList'

// import DatePicker from "react-datepicker";
import Calendar from './Forms/DatePicer';

    const User =()=> {
        // const { id } = useParams(); 
        
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
                            <b>Name:Ivan Smit</b>
                            
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
                            <SignupForm/>
                            {/* <DataRange/> */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }



export default User;
