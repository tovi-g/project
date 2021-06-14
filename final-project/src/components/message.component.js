import { connect } from 'react-redux';
import React from 'react';

function mapStateToProps(state) {
    debugger
    return {
        users: state.UserReducer.user,
    };
}

export default connect(mapStateToProps)( function Message(props) {
    const {users}=props;
    debugger
    return (
        <>

        <h1>message</h1>
        {
           users.name!==undefined
             ?<div>{`My name is ${users.name} and I am ${users.age} years old from ${users.city}`}</div>
            :<div>My name is full name and I am the age of a city of residence </div>
        }


        </>
    );
})