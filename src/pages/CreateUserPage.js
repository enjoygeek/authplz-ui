
import React from 'react'
import { render } from 'react-dom'
import validator from 'validator';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { CreateUserView } from '../components/CreateUserView.js'


class CreateUserPage extends React.Component {

  constructor(props) {
    super(props);
    // Create form state
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      successMessage: '',
      errors: {
        username: '',
        email: '',
        password: ''
      },
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }


  validate(state) {

    let errors = {}

    // Errors shown after submitted state is set
    if (state.submitted) {

      // TODO: could / should? validate username existence here
      if ((typeof state.username === "undefined") || (state.username.length === 0)) {
        errors.username = "username required"
      } else if (!validator.isAlphanumeric(state.username)) {
        errors.username = "username must consist of alphanumeric characters"
      } else {
        delete errors.username
      }

      if ((typeof state.email === "undefined") || (state.email.length === 0)) {
        errors.email = "email address required"
      } else if (!validator.isEmail(state.email)) {
        errors.email = "email address must be of the form a@b.com"
      } else {
        delete errors.email
      }

      if ((state.passwordOne.length === 0) || (state.passwordTwo.length === 0)) {
        errors.password = "password must be set"
      } else if (state.passwordOne !== state.passwordTwo) {
        errors.password = "Password mismatch"
      } else {
        delete errors.password
      }

    }

    return errors
  }

  onSubmit(state) {
    console.log("Submit: ")
    console.log(state)

    

  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={4} md={4}>
            <CreateUserView onChange={this.onChange} onSubmit={this.onSubmit} validate={this.validate}/>
          </Col>
        </Row>
      </Grid>
    ) 
  }
}

export {CreateUserPage}
