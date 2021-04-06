import { OWNER_ADDRESS_UPDATE, USER_ADDRESS_UPDATE, EVENT_LIST_ADD,IS_ADMIN_UPDATE} from '../store/actions/actionsConsts';
import store from "./../store/store"

const Web3 = require('web3');
//const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/45b7ee515a5241f79220b0ce4c446ee3");
const web3 = new Web3(window.ethereum);
const ticketFactory = require('./../abis/TicketFactory.json')
const ticketOffice = require('./../abis/TicketOffice.json')

const FACTORY = "0xE0FF8433Cca8003f08c7993f6311feaa6aFD1C16"
const ticketFactoryContract = new web3.eth.Contract(ticketFactory.abi, FACTORY)
const BN = require('bn.js');

export default class TicketService {

    loadData() {
        web3.eth.net.isListening()
            .then(() => console.log('web3 is connected'))
            .catch(e => console.log('Wow. Something went wrong'));

        let eventsCount;

        ticketFactoryContract.methods.countEvents().call().then(response => {
            eventsCount = parseInt(response);

            for (let i = 0; i < eventsCount; i++) {
                ticketFactoryContract.methods.eventsList(i).call().then(response => {
                    store.dispatch({ type: EVENT_LIST_ADD, value_1: [response] });
                });
            }
        });
    }   

    async createEvent(data, userAddress) {
        try {
            let ticketPrice = data.eventPrice * 1000000000000000000;
            let transactionHash = await ticketFactoryContract.methods.addEvent(data.eventName, data.eventDescription, data.eventPhotoUrl, data.eventSymbol, new BN(ticketPrice.toString(), 10), Date.now(), data.eventDuration, data.maxTickets)
                .send({ "from": userAddress, gas: 6000000 });
            // Handle the result
            console.log(transactionHash);
        } catch (error) {
            console.log(error);
        }
    }

    async buyTicket(data) {
        let accounts = await ethereum.request({ method: 'eth_accounts' });
        let user = accounts[0];

        let ticketOfficeContract = new web3.eth.Contract(ticketOffice.abi, data.eventAddress);

        try {
            let transactionHash = await ticketOfficeContract.methods.mint()
                .send({ "from": user, gas: 1000000, "value": data.ticketPrice });
            // Handle the result
            console.log(transactionHash);
        } catch (error) {
            console.log(error);
        }
    }
}
