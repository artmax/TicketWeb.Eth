import React, { Component } from "react";


export default class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventSymbol: '',
            eventDescription: '',
            eventPhotoUrl: '',
            eventPrice: 0.0,
            eventDuration: 0,
            maxTickets: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input
                        name="eventName"
                        type="text"
                        value={this.state.eventName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Event Symbol:
              <input
                        name="eventSymbol"
                        type="text"
                        value={this.state.eventSymbol}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Description:
              <input
                        name="eventDescription"
                        type="text"
                        value={this.state.eventDescription}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Event Photo Url:
              <input
                        name="eventPhotoUrl"
                        type="text"
                        value={this.state.eventPhotoUrl}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Ticket Price (ETH):
              <input
                        name="eventPrice"
                        type="number"
                        value={this.state.eventPrice}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Duration:
              <input
                        name="eventDuration"
                        type="number"
                        value={this.state.eventDuration}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Ticket Count:
              <input
                        name="maxTickets"
                        type="number"
                        value={this.state.maxTickets}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Create Event" />
            </form>
        );
    }
}