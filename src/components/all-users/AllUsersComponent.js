import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import '/src/components/all-users/AllUsers.css'

class AllUsersComponent extends Component {

    state = {users: [], classState: 'one'};

    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users: usersFromAPI});
            });
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'});
        } else {
            this.setState({classState: 'two'});
        }
        this.flag = !this.flag;

    };


    render() {
        let {users, classState} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Users Page</h1>
                {
                    users.map(value => (<UserComponent item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllUsersComponent;