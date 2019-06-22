import React,{Component} from 'react';
class Inp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Describe who you are here'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
  return (
    <form onSubmit={this.handleSubmit}>
        <textarea class="Profile-TextArea" rows="4" cols="50"
          style={{fontFamily:'sans-serif' ,fontSize:'1.1em'}}
          value={this.state.value} onChange={this.handleChange}
        />
    </form>
  );
}
}
export default Inp;
