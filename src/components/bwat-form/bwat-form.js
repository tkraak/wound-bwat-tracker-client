import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowInput from '../form-row-input/form-row-input';
import FormRowDisplay from '../form-row-display/form-row-display';
import ClientForm from '../client-form/client-form';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import './bwat-form.css';
import DatePicker from 'react-date-picker';
import TopNav from '../top-nav/top-nav';
import connect from 'react-redux';
import {fetchClients} from '../../actions';

export class BWATForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clients: [{id: '1', firstName: 'kelsey', lastName: 'last', hospitalName: 'Matilda', city: 'LA', clientState: 'CA', startDate: '10/13/2018', endDate: '12/14/2019', age: 19, weight: 145}, {id: 2, firstName: 'first', lastName: 'last', hospitalName: 'Matilda', city: 'LA', clientState: 'CA', startDate: '10/13/2018', endDate: '12/14/2019', age: 32, weight: 150}],
      clientSelected: false,
      clientId: '',
      clientName: '',
      date_of_form: '',
      wound_location: {choices: ['Sacrum and Coccyx','Lateral ankle','Trochanter','Medial ankle','Ischial tuberosity','Heel','other'], selected: ''},
      shape: {choices: ['Irregular','Linear or elongated','Round/Oval','Bowl/boat','Square/rectangle','Butterfly','Other Shape'], selected: ''},
      question_one: {choices:['1 = Length x width less than 4 sq cm','2 = Length x width 4-16 sq cm', '3 = Length x width 16.1--36 sq cml','4 = Length x width 36.1--80 sq cm','5 = Length x width greater than 80 sq cm'], selected: ''},
      question_two: {choices: ['1 = Non-blanchable erythema on intact skin','2 = Length x width 4-16 sq cm','3 = Length x width 16.1--36 sq cml','4 = Length x width 36.1--80 sq cm','5 = Length x width greater than 80 sq cm'], selected: ''},
      question_three: {choices:['1 = Indistinct, diffuse, none clearly visible','2 = Distinct, outline clearly visible, attached, even with wound base','3 = Well-defined, not attached to wound base ','4 = Well-defined, not attached to base, rolled under, thickened ','5 = Well-defined, fibrotic, scarred or hyperkeratotic'], selected: ''},
      question_four: {choices: ['1 = None present','2 =Undermining less than 2 cm in any area','3 = Undermining 2-4 cm involving less than 50% wound margins','4 = Undermining 2-4 cm involving greater than 50% wound margins','5 = Undermining greater than 4 cm or Tunneling in any area'], selected: ''},
      question_five: {choices:['1 = None visible ','2 = White/grey non-viable tissue &/or non-adherent yellow slough ','3 = Loosely adherent yellow slough','4 = Adherent, soft, black escha','5 = Firmly adherent, hard, black eschar'], selected: ''},
      question_six: {choices: ['1 = None visible','2 = less than 25% of wound bed covered','3 = 25% to 50% of wound covered','4 = 50% to 75% of wound covered','5 = 75% to 100% of wound covered'], selected: ''},
      question_seven: {choices:['1 = None','2 = Bloody','3 = Serosanguineous: thin, watery, pale red/pink','4 = Serous: thin, watery, clear','5 = Purulent: thin or thick, opaque, tan/yellow, with or without odor'], selected: ''},
      question_eight: {choices: ['1 = None, dry wound','2 = Scant, wound moist but no observable exudatem','3 = Small','4 = Moderate','5 = Large'], selected: ''},
      question_nine: {choices:['1 = Pink or normal for ethnic group','2 = Bright red &/or blanches to touch','3 = White or grey pallor or hypopigmented','4 = Dark red or purple &/or non-blanchable','5 = Black or hyperpigmente'], selected: ''},
      question_ten: {choices: ['1 = No swelling or edema','2 = Non-pitting edema extends less than 4 cm around wound','3 = Non-pitting edema extends greater than or equal to 4 cm around wound','4 = Pitting edema extends less than 4 cm around wound','5 = Crepitus and/or pitting edema extends greater than or equal to 4 cm around wound'], selected: ''},
      question_eleven: {choices:['1 = None present','2 = Induration, less than 2 cm around wound','3 = Induration 2-4 cm extending less than 50% around wound','4 = Induration 2-4 cm extending greater than 50% around wound','5 = Induration > 4 cm in any area around wound'], selected: ''},
      question_twelve: {choices: ['1 = Skin intact or partial thickness wound','2 = Bright, beefy red; 75% to 100% of wound filled &/or tissue overgrowth','3 = Bright, beefy red; 75% to 25% of wound filled','4 = Pink, &/or dull, dusky red &/or fills less than 25% of wound','5 = No granulation tissue present'], selected: ''},
      question_thirteen: {choices: [ '1 = 100% wound covered, surface intact','2 = 75% to 100% wound covered &/or epithelial tissue extends >0.5cm into wound bed','3 = 50% to 75% wound covered &/or epithelial tissue extends to  less than 0.5cm into wound bed','4 = 25% to 50% wound covered','5 = less than 25% wound covered'], selected: ''},
      submitting: false,
      score: 13
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const clientsObj = this.props.dispatch(fetchClients());
    this.setState({clients: clientsObj});
  }

  onDateChange = date => this.setState({date_of_form: date});

  onClick(e) {
      e.preventDefault();
      this.setState(
        { clientId: e.target.value,
          clientSelected: true,
          clientName: e.target.text
        }
      );
  }

  addSelected(e) {
    console.log(e.target.id)
    // const key = e.target.id;
    // const states = this.state;
    // const items = states.key;
    // items.selected = e.target.value;
    // this.setState({items});

  }

  onSubmit (e) {
    e.preventDefault();
        const bwat = document.forms.bwat;

        bwat.date_of_form.value="";
        bwat.wound_location.value="";
        bwat.client_id.value = "";
        bwat.question_one.value = "";
        bwat.question_two.value="";
        bwat.question_three.value = "";
        bwat.question_four.value = "";
        bwat.question_five.value="";
        bwat.question_six.value = "";
        bwat.question_seven.value="";
        bwat.question_eight.value = "";
        bwat.question_nine.value = "";
        bwat.question_ten.value="";
        bwat.question_eleven.value = "";
        bwat.question_twelve.value = "";
        bwat.question_thirteen.value="";
        bwat.score.value="";
  }

  onChange = date => this.setState({startDate: date });

  render () {

    if(!this.state.clientSelected) {
      return(
        <div className="bwat-form">
          <TopNav />
          <form>
            <h2>BWAT Wound Form</h2>
            <Field name='client-type' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>Select an existing client</label>
              {this.state.clients.map(client => (
                <option value={client.id} key={client.id} onClick={this.onClick}>
                  {client.firstName} {client.lastName}
                  </option>
                ))}
            </Field>
            <button><Link to={'/new-client'}>Create New Client</Link></button>
          </form>
        </div>
      )
    }

      return (
        <div className="bwat-form">
          <TopNav />
          <form
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                  )}>
            <h2>BWAT Wound Form</h2>
            <h3>Client: {this.state.clientName}</h3>
            <label>Date of Form</label>
            <DatePicker
               name='date_of_form'
               onChange={this.onDateChange}
               value={this.state.date_of_form}
            />
            <FormCategoryRow title='Wound Information' />
            <Field name='wound_location' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>Where is the wound located? Anatomic site:</label>
              <select value={this.state.wound_location.value} id="wound_location" onChange={this.addSelected}>
              {this.state.wound_location.choices.map(choice => (
                <option value={choice}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='shape' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>Shape: Overall wound patter; assess by observing perimeter and depth?</label>
              <select value={this.state.shape.value} id="shape" onChange={this.addSelected}>
              {this.state.shape.choices.map(choice => (
                <option value={choice}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <FormCategoryRow title='Questions' />
            <Field name='question_one' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>1. Size</label>
              <select value={this.state.question_one.value} id="question_one"onChange={this.addSelected}>
              {this.state.question_one.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_two' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>2. Depth</label>
              <select value={this.state.question_two.value} id="question_two" onChange={this.addSelected}>
              {this.state.question_two.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_three' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>3. Edges</label>
              <select value={this.state.question_three.value} id="question_three"onChange={this.addSelected}>
              {this.state.question_three.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_four' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>4. Undermining</label>
              <select value={this.state.question_four.value} id="question_four" onChange={this.addSelected}>
              {this.state.question_four.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_five' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>5. Necrotic Tissue Type</label>
              <select value={this.state.question_four.value} id="question_five" onChange={this.addSelected}>
              {this.state.question_five.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_six' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>6. Necrotic Tissue Amount</label>
              <select value={this.state.question_six.value} id="question_six" onChange={this.addSelected}>
              {this.state.question_six.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_seven' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>7. Exudate Type</label>
              <select value={this.state.question_seven.value} id="question_seven"onChange={this.addSelected}>
              {this.state.question_seven.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_eight' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>8. Exudate Amount</label>
              <select value={this.state.question_eight.value} id="question_eight" onChange={this.addSelected}>
              {this.state.question_eight.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_nine' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>9. Skin Color Surrounding Wound</label>
              <select value={this.state.question_nine.value} id="question_nine" onChange={this.addSelected}>
              {this.state.question_nine.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_ten' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>10. Peripheral Tissue Edema</label>
              <select value={this.state.question_ten.value} id="question_ten" onChange={this.addSelected}>
              {this.state.question_ten.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_eleven' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>11. Peripheral Tissue Induration</label>
              <select value={this.state.question_eleven.value} id="question_eleven" onChange={this.addSelected}>
              {this.state.question_eleven.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_twelve' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>12. Granulation Tissue</label>
              <select value={this.state.question_twelve.value} id="question_twelve" onChange={this.addSelected}>
              {this.state.question_twelve.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <Field name='question_thirteen' component='FormRowInput' validate={[required, nonEmpty]}>
              <label>13. Epithelialization</label>
              <select value={this.state.question_thirteen.value} id="question_thirteen" onChange={this.addSelected}>
              {this.state.question_thirteen.choices.map((choice, index) => (
                <option value={index}>
                  {choice}
                </option>
              ))}
              </select>
            </Field>
            <FormRowDisplay title='Weekly Score' value={this.state.score} />
            <button type='submit' disabled={this.props.pristine || this.props.submitting}>Create BWAT Form</button>
          </form>
        </div>
      );
  }
}

export default reduxForm({
  form: 'bwat'
})(BWATForm);
