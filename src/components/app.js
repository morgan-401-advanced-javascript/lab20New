import React from "react";
import Dropdown from "./dropdown";
import Header from "./header";
import InputBox from "./inputbox";
import Radio from "./radio";


/**
 * Our App class that is "smart" and is the primary application code
 * @class
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      allergens: "",
      food: "",
      PlusOne: ""
    };
  }
  /**
   * method that will update the state from user input data
   * @method onChange 
   * @param {object} newData 
   */
  onChange(newData) {
    let dataKey = newData.target.name;
    let dataValue = newData.target.value;
    this.setState({ [dataKey]: dataValue });
  }

  render() {
    return (
      <div className="container App">
        <Header />
        <Dropdown
          label="Food Preference:"
          list={["Chicken", "Fish", "Veggie"]}
          name="food"
          onChange={this.onChange.bind(this)}
        />
        <InputBox
          label="First Name:"
          name="firstName"
          onChange={this.onChange.bind(this)}
        />
        <InputBox
          label="Last Name:"
          name="lastName"
          onChange={this.onChange.bind(this)}
        />
        <InputBox
          label="Allergens:"
          name="allergens"
          onChange={this.onChange.bind(this)}
        />
        <Radio
          list={["Yes", "No"]}
          label="Plus One?"
          name="PlusOne"
          onChange={this.onChange.bind(this)}
        />

        <div className="confirm">
          <div>
          <h4>Does this look correct?</h4>
          <p>
            Name: {this.state.firstName} {this.state.lastName}
            <br />
            Food Choice: {this.state.food}
            <br />
            Allergies: {this.state.allergens}
            <br />
            Plus One: {this.state.PlusOne}
            <br />
          </p>
          <button>
            I'm Ready!
          </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
