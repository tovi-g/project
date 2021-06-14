




import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import UserService from '../services/user.service'
import { connect } from 'react-redux'
import { actions } from '../redux/Action'

// function mapStateToProps(state) {
//     return {
//         users: state.UserReducer.user,
//     };
// }
const mapDispatchToProps = (dispatch) => {
    return {
        
        setUser: (u) =>  dispatch(actions.setUser(u)),
        
    }
}

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('this feild is required'),
    age: Yup.string().required('this feild is required'),
    city: Yup.string().required('this feild is required'),
    email: Yup.string().required('this feild is required').email('bad email'),
    phone: Yup.string().required('this feild is required')
})

function FormRegister({ setUser,addUser,setToken }) {
    
    const handleSubmit = async (values) => {
        console.log(`${values.name} ${values.email}`)
        try {
            const user = await UserService.register(values);
            setUser(user.user);
           
           
        } catch (err) {

        }
       
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="col-4 ">
                <h1>Form Register</h1>
                <Formik
                    initialValues={{ name: '',age:'',city:'', email: '', phone: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={RegisterSchema}
                    render={() => {
                        return (
                            <Form>
                                <div className="form-group">
                                    <Field placeholder="name" type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="age" type="number" name="age" className="form-control" />
                                    <ErrorMessage name="age" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="city" type="text" name="city" className="form-control" />
                                    <ErrorMessage name="city" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="email" type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="phone" type="number" name="phone" className="form-control" />
                                    <ErrorMessage name="phone" component="div" />
                                </div>
                                <div className="form-group">
                                    <button  type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        )
                    }}
                />
            </div>
        </div>



    )
}

export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(FormRegister);

