import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }))
    };

    handleAddOptions = (value) => {
        if (!value) {
            return 'Please enter something to add.';
        } else if (this.state.options.indexOf(value) > -1) {
            return 'That option already exists.';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([value]) }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        }
        catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount!');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOptions={this.handleAddOptions} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['Option 1', 'Option 2', 'Option 3'],
};

