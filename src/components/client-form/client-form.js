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
      complete: false
    };
  }

  onSubmit (values) {
    console.log(values);
    this.setState({
      id: client.id.value,

      feedback: 'Client successfully created'
      complete
    })
  }

  render () {
    if(this.state.complete) {
      return (
        <div>
          <p>{feedback}</p>
          <button><Link {'/new-form'} clientId=this.id>Create a BWAT Form for {this.firstName}</Link></button>
        </div>
      );
    }

    return (
      <form>
        <h2>Client</h2>
        <FormCategoryRow title='Client Name' />
        <Field name='first-name' type='text' label='First Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='last-name' type='text' label='Last Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <FormCategoryRow title='Client Location' />
        <Field name='hopsital-name' type='text' label='Hospital Name' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='city' type='text' label='City' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='state' type='text' label='State' component={FormRowInput} validate={[required, nonEmpty]} />
        <FormCategoryRow title='Time Frame' />
        <Field name='start-date' label='Start Date' type='date' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='end-date' type='date' label='End Date' component={FormRowInput} validate={[required, nonEmpty]} />
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