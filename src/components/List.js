import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByValue, loadData, loadExactPage, loadNewPage, sortByAlphabet, sortBySubscription } from "../store"

class List extends Component {


    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({ page: 1 }, "title 1", "?page=1");
        } else {

        }
        this.props.dispatch(loadData({ count: 40 }));
    }

    filterByInput(e) {
        let input = e.target.value;
        this.props.dispatch(filterByValue({ value: input }))
    }

    nextPage() {
        this.props.dispatch(loadNewPage({ page: 1 }))
    }

    previousPage() {
        this.props.dispatch(loadNewPage({ page: -1 }));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({ page }))
    }

    sortByInput(e) {
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('subscription')) {
            this.props.dispatch(sortBySubscription({ direction }))
        } else {
            this.props.dispatch(sortByAlphabet({ direction }));
        }
    }

    render() {

        let users = this.props.state.filteredUsers;
        return (


            <div className="List">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                User List Filtering and Sorting
                            </h1>
                            <h2 className="subtitle">
                                User List
                            </h2>
                        </div>
                    </div>
                </section>

                
                <section className='section'>
                    <div className='container'>
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Next page
                            </button>

                            <ul className="pagination-list">


                                {[...Array(this.props.state.filteredPages)].map((value, index) => (
                                    <button
                                        className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                        aria-label="Page 1"
                                        onClick={() => this.goToPage(index + 1)}
                                        aria-current="page">
                                        {index + 1}
                                    </button>
                                ))

                                }

                            </ul>
                        </nav>
                    </div>
                </section>

                <section className='section'>
                    <div className='container'>
                        <div>
                            <div className="field is-grouped" style={{ alignItems: "center" }}>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={e => {
                                            this.sortByInput(e)
                                        }}>
                                            <option value="" disabled selected>Sort by</option>

                                            <option value='alphabet_asc'>Name - A-Z</option>
                                            <option value='alphabet_desc'>Name - Z-A</option>

                                            <option value='subscription_asc'>Subscription - Lowest to Highest</option>
                                            <option value='subscription_desc'>Subscription - Highest to Lowest</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='control' style={{ minWidth: "300px" }}>
                                    <input onChange={e => {
                                        this.filterByInput(e);
                                    }} style={{ width: "100%" }} placeholder='Filter by' type='text' />
                                </div>
                            </div>
                        </div>
                        <div className='tile is-ancestor' style={{ flexWrap: "wrap" }}>
                                
                                {
                                users && users.length && users.map(user => (
                                <div className='tile is-parent is-3'>
                                    <div className='tile is-child box'>
                                        <p>
                                            <b>Name: </b>
                                            {user.name}
                                        </p>
                                        <p>
                                            <b>City: </b>
                                            {user.city}
                                        </p>
                                        <p>
                                            <b>Email: </b>
                                            {user.email}
                                        </p>
                                        <p>
                                            <b>Subscription: </b>
                                            {user.subscription}$
                                            </p>
                                    </div>
                                </div>
                            ))
                        }


                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(List);