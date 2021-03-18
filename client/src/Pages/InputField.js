import React from "react";

class InputField extends React.Component {

    render() {
        return (
            <div className="inputField">
                <input
                   calssName="input"
                   type={this.props.value}
                   onChange={ (e) => this.props.onChange(e.target.value) }
                />           
            </div>
        );
    }
}

export default InputField;