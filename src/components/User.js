import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SetSubscriptionForm from './Forms/SetSubscriptionForm';
import ListButton from './Forms/ListButton';
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


const User = () => {

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



    // state = {
    //     name: '',
    //   }
    //   handleChange = event => {
    //     this.setState({ name: event.target.value });
    //   }

    //   handleSubmit = event => {
    //     event.preventDefault();

    //     const user= {
    //       name: this.state.name
    //     };

    //     axios.post(`${axios.defaults.baseURL}/people`, { user })
    //       .then(res => {
    //         console.log(res);
    //       })
    //   }
    if (loading) return <span>Loading…</span>;

    return (
        <div>
            <section>
                <div className='list-button'>
                    <ListButton />
                </div>
            </section>
            <section>
            </section>
            <div className='tile is-parent is-3'>
                <div className='tile is-child box'>
                    <p>
                        <b>Name: {user.name}  {id} </b>

                    </p>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                User Name:
            <input type="text" name="name" onChange={this.handleChange} />
                            </label>
                            <button type="submit">Add </button>
                        </form>
                    </div>

                    <div>
                        < Calendar />

                    </div>

                    <SetSubscriptionForm />


                </div>
            </div>
        </div >
    );
}



export default User;
