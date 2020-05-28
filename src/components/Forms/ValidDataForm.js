import React from 'react';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
 import { Button, Form } from 'semantic-ui-react'

class ValidDataForm extends React.Component {
    min = new Date(2020, 1, 6);
    max = new Date(2025, 31, 12);
    defaultValue = new Date(2020, 28, 5);

    render() {
        return (
            <div>
                <div className="example-config">
                    <p>Select a date:</p>
                    <DatePicker
                        min={this.min}
                        max={this.max}
                        defaultValue={this.defaultValue}
                    ></DatePicker>
                    <Form unstackable>
              <Form.Group widths={2}>
              <Form.Input label='First name' placeholder='First name' />
             <Form.Input label='Last name' placeholder='Last name' />
                 </Form.Group>
                 <Form.Checkbox label='I agree to the Terms and Conditions' />
               <Button type='submit'>Submit</Button>
             </Form>
                </div>
            </div>
        )
    }
}



export default ValidDataForm