
import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    debugger
    return {
        users: state.UserReducer.user,
    };
}

export default connect(mapStateToProps)(function userList(props) {
    const { users } = props
    return (
        <>
            <h1>userList</h1>
            {
                Object.values(users) && Object.values(users).map((item, index) => (
                  
                        item.map((item, index) => (
                            <div className="d-flex justify-content-center">
                                <div className="col-5">
                                    <ul className="list-group" key={index}>
                                        <li className="list-group-item">{`name: ${item.name} email: ${item.email}`}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                      
                
                    // <div>{item[index].name}</div>
                )
                )
                )
            }

        </>
    );
})