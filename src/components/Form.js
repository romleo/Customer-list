import React from 'react';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mySubscription: ''
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mySubscription}>
        <option value="Active">Active</option>
        <option value=" Suspend">Suspend</option>
        <option value="later">Later</option>
      </select>
      </form>
    );
  }
}

export default MyForm;