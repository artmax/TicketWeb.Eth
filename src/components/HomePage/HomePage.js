import React, { Component } from "react";
import "./homepage.scss";
import TicketService from '../TicketService'

const ticketService = new TicketService();

export default class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  async buyTicket(data) {
    await ticketService.buyTicket(data);
  }

  async connectWallet() {
    ethereum.enable();
  }

  render() {
    return (
      <div>
        <ConnectWallet userAddress={this.props.userAddress} onClick={this.connectWallet}></ConnectWallet>

        <h1 className="primary">Ticket Service</h1>

        {this.props.eventList.map((data, index) => {
          return (
            <div key={index}>
              <h3>{data.eventName}</h3>
              <img className="event-poster-image" src={data.eventPosterURI} />

              <div><strong>{data.eventDescription}</strong></div>
              <div>{new Date(data.startAt * 1000).toDateString()}</div>
              <div>Ticket Price: {data.ticketPrice / 1000000000000000000}</div>
              <button onClick={() => this.buyTicket(data)}>Buy Ticket</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function ConnectWallet(props) {
  if (props.userAddress == '') {
    return <button onClick={props.onClick}>Connect your wallet</button>;
  }
  return null;
}
