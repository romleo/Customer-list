import React from 'react';
// import { useParams } from "react-router-dom";
import SearchField from "react-search-field";
// import MyForm from './Form';
import ListButton from './Forms/ListButton';
import ValidDataForm from './Forms/ValidDataForm';
import DataRange from './Forms/DataRange';
// import CheckList from './Forms/CheckList'



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
                    <div className='search'>
                        <SearchField
                            placeholder='Search item'
                            onClick={() => this.goToUsers()}
                        />
                    </div>
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
                            {/* <CheckList/> */}
                             <ValidDataForm/> 
                            {/* <MyForm/> */}
                            {/* <DataRange/> */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }



export default User;
