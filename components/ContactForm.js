var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className='contactForm'>
        <label htmlFor='inputYourName'>Imię:</label>
        <input
          type='text'
          placeholder='Imię'
          id='inputYourName'
          required
          value={this.props.contact.firstName}
        />
        <label htmlFor='inputYourSurename'>Nazwisko:</label>
        <input
          type='text'
          placeholder='Nazwisko'
          id='inputYourSurename'
          required
          value={this.props.contact.lastName}
        />
        <label htmlFor='inputYourEmail'>email:</label>
        <input
          type='email'
          placeholder='Email'
          id='inputYourEmail'
          required
          value={this.props.contact.email}
        />
        <button type='submit'>Dodaj kontakt</button>
      </form>
    );
  },
})
