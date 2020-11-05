import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile 
                    id={this.props.id}
                    name={this.props.name}
                    image={this.props.image}
                />
                <CustomerInfo 
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}
                />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt='profile' />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}


class CustomerInfo extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.birthday}</h2>
                <h2>{this.props.gender}</h2>
                <h2>{this.props.job}</h2>
            </div>
        )
    }
}

export default Customer;