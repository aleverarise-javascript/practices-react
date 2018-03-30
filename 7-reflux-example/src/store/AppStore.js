import Reflux from 'reflux';
import * as HTTP from '../services/Http';
import Actions from '../actions/Actions';

class AppStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
        this.state = {
            count: 0,
        }
    }

    addOne(){
        let newCount = this.state.count + 1;
        this.setState({count: newCount});
    }

    minusOne(){
        let newCount = this.state.count - 1;
        this.setState({count: newCount});
    }
    
}

export default AppStore;