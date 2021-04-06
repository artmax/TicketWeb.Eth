import React from "react";
import { connect } from 'react-redux';
import Header from "./global/Header";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ApiPage from "./ApiPage/ApiPage";
import mapStateToProps from '../store/mapStateToProps';
import TicketService from './TicketService';
import Auth from './Auth';

const HomePage_W = connect(mapStateToProps("HomePage"))(HomePage);
const ApiPage_W = connect(mapStateToProps("ApiPage"))(ApiPage);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    let ticketService = new TicketService();
    ticketService.loadData();

    let auth = new Auth();
    auth.authorize();
  }



  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage_W} />
        <Route path="/api" component={ApiPage_W} />
      </div>
    );
  }
}
