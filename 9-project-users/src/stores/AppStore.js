import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as Http from '../services/Http';

class AppStore extends Reflux.Store{
    constructor() {
        super();
        
        this.listenables = Actions;
        this.state = {
            data: [],
        }
    }

    getUsers(){
        Http.get('https://reqres.in/api/users?page=2')
        .then((response) => {
            // console.log(response);
            this.setState({data: response.data});
        });
    }
    
}

export default AppStore;