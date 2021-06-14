import { connect } from 'react-redux';
import React from 'react';

function mapStateToProps(state) {
    debugger
    return {
        users: state.UserReducer.user,
        selectedUser:state.UserReducer.selectedUser
    };
}

export default connect(mapStateToProps)( function Message(props) {
    const {selectedUser}=props;
    debugger
    return (
        <>

        <h1>message</h1>
        {
           selectedUser.name!==undefined
             ?<div>{`My name is ${selectedUser.name} and I am ${selectedUser.age} years old from ${selectedUser.city}`}</div>
            :<div>My name is full name and I am the age of a city of residence </div>
        }


        </>
    );
})