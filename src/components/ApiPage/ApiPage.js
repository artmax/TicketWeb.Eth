import React, { Component } from "react";
import EventForm from './EventForm';
import TicketService from '../TicketService'

const ticketService = new TicketService();

export default class ApiPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(data) {
    console.log(data);
    if (!this.props.isAdmin) {
      alert("User is not an owner");
      return;
    }
    ticketService.createEvent(data, this.props.userAddress);
  }

  render() {

    if (this.props.isAdmin) {
      return (
        <div >
          <h1>Event Management</h1>
          <EventForm handleSubmit={this.handleSubmit}></EventForm>

        </div>
      );
    }
    return <h3>You are not an owner</h3>
  }
}

