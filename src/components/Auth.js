import { OWNER_ADDRESS_UPDATE, USER_ADDRESS_UPDATE, EVENT_LIST_ADD,IS_ADMIN_UPDATE} from '../store/actions/actionsConsts';
import store from "./../store/store"

export default class Auth {
    authorize() {
        ethereum.request({ method: 'eth_accounts' }).then(accounts => {
            getEthAccount(accounts[0]);
        });


        window.ethereum.on('accountsChanged', function (accounts) {
            getEthAccount(accounts[0]);
        })
    }
}


function getEthAccount(account) {
    store.dispatch({ type: USER_ADDRESS_UPDATE, userAddress: account });
    store.dispatch({ type: IS_ADMIN_UPDATE, newUserAddress: account });
}