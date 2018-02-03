import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowInput from '../form-row-input/form-row-input';
import {required, nonEmpty} from '.../validators';

import './client-form.css';

export class ClientForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      hospitalName: '',
      city: '',
      clientState: '',
      startDate: '',
      endDate: '',
      age: '',
      weight: '',
      feedback: '',
      complete: false,
      error: false,
    };
  }

  onSubmit (values) {
    console.log(values);
    this.setState({
      firstName: client.firstName.value,
      lastName: client.lastName.value,
      hospitalName: client.hospitalName.value,
      city: client.city.value,
      clientState: client.clientState.value,
      startDate: client.startDate.value,
      endDate: client.endDate.value,
      age: client.age.value,
      weight: client.weight.value,
      feedback: 'Client successfully created',
      complete,
      error: false
    })
  }

  render () {

      let successMessage;
       if (this.props.complete) {
           successMessage = (
             <div>
               <p>{feedback}</p>
               <button><Link to={'/new-form'} clientId={this.id}>Create a BWAT Form for {this.firstName}</Link></button>
             </div>
           );
       }

       let errorMessage;
       if (this.props.error) {
           errorMessage = (
             <div>
               <p>{feedback}</p>
             </div>
           );
       }

    return (
      <form>
        <h2>Client</h2>
        {errorMessage}
        {successMessage}
        <FormCategoryRow title='Client Name' />
        <Field name='firstName' type='text' label='First Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='lastName' type='text' label='Last Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <FormCategoryRow title='Client Location' />
        <Field name='hopsitalName' type='text' label='Hospital Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='city' type='text' label='City' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='clientState' type='text' label='State' component={FormRowInput} validate={[required, nonEmpty]} />
        <FormCategoryRow title='Time Frame' />
        <Field name='startDate' label='Start Date' type='date' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='endDate' type='date' label='End Date' component={FormRowInput} validate={[required, nonEmpty]} />
        <FormCategoryRow title='Client Information' />
        <Field name='age' type='text' label='Age' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='weight' type='text' label='Weight' component={FormRowInput} validate={[required, nonEmpty]} />
        <button type='submit' diabled={this.props.pristine || this.props.submitting}>Create Client</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'client'
})(ClientForm);
