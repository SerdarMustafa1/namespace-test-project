import React, { Component } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './TaskFormStyles.scss';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '3a8aa774-c1ff-4592-b288-6c4ded6cb66d',
      token: '6415d133dcd22282556c872fe3cc326db2d11c78',
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.handleSubmit(), 50000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  // getListTask = async e => {};

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
    fetch(`https://gsmtasks.com/api/tasks/task_forms/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${this.state.token}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.handleSubmit}>
          <label className="labels">
            Account
            <input type="text" className="inputs" />
          </label>
          <label className="labels">
            Address
            <input value="" type="text" className="inputs" />
          </label>
          <label className="labels">
            Category
            <input value="" type="text" className="inputs" />
          </label>
          <CustomButton type="submit">Save</CustomButton>
        </form>
      </div>
    );
  }
}

export default TaskForm;
