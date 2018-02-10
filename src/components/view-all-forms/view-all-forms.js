import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import FormRowInput from '../form-row-input/form-row-input';
import BWATPreview from '../bwat-preview/bwat-preview';
import TopNav from '../top-nav/top-nav';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';

import './view-all-forms.css'

export class ViewAllForms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clients: [{id: 1, clientId: 1, firstName: 'first', lastName: 'last', hospitalName: 'Matilda', city: 'LA', clientState: 'CA', startDate: '10/13/2018', endDate: '12/14/2019', age: 19, weight: 145}],
      forms: [{id: 12, clientId: 1, week: '1/2/2018', score: 12}, {id: 13, clientId: 2, week: '2/13/2018', score: 14}],
      clientSelected: false,
      clientId: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
      e.preventDefault();
      this.setState(
        { clientId: e.target.value,
          clientSelected: true
        }
      );
  }

  render () {
    const clientChoices = [];
    const clientIds = [];
    this.state.clients.forEach(client =>
        clientChoices.push(`${client.firstName} ${client.lastName}`)
    )

    const BWATForms = this.state.forms.map((formId, index) =>
        <BWATPreview id={formId.id} score={formId.score} week={formId.week} clientId={formId.clientId}/>
      );

    if(!this.state.clientSelected) {
      return (
        <div>
        <TopNav />
        <Field name='client-type' component='FormRowInput' validate={[required, nonEmpty]}>
          <label>Select a Client</label>
          {this.state.clients.map(client => (
            <option value={client.id} key={client.id} onClick={this.onClick}>
              {client.firstName} {client.lastName}
              </option>
            ))}
        </Field>
        </div>
      )
    }

    return (
      <div>
      <TopNav />
        <div class='view-client'>
          <h2>Client</h2>
          <FormCategoryRow title='Client Name' />
          <FormRowDisplay className='client' title='First Name' answer={this.props.firstName} />
          <FormRowDisplay className='client' title='Last Name' answer={this.props.lastName} />

          <FormCategoryRow title='Client Location' />
          <FormRowDisplay className='client' title='Hospital Name' answer={this.props.hospitalName} />
          <FormRowDisplay className='client' title='City' answer={this.props.city} />
          <FormRowDisplay className='client' title='State' answer={this.props.clientState} />

          <FormCategoryRow title='Time Frame' />
          <FormRowDisplay className='client' title='Start Date' answer={this.props.startDate} />
          <FormRowDisplay className='client' title='End Date' answer={this.props.endDate} />

          <FormCategoryRow title='Client Information' />
          <FormRowDisplay className='client' title='Age' answer={this.props.age} />
          <FormRowDisplay className='client' title='Weight' answer={this.props.weight} />
        </div>

      <div class="view-forms">
        {BWATForms}
      </div>
    </div>
    );
  }
}

export default reduxForm({
  form: 'client'
})(ViewAllForms);
