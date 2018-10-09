import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class EditListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, excerpt } = this.state;
    this.props.editList(id, title, excerpt)
  }

  render() {
    return(
      <Paper style={{margin: 10, padding: 10}}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              <input name="title"
                type="text"
                placeholder="Title..."
                value={this.state.title}
                onChange={this.handleChange}
                />
            </Grid>
            <Grid item md={4} xs={12}>
              <input name="excerpt"
                type="text"
                placeholder="Excerpt..."
                value={this.state.excerpt}
                onChange={this.handleChange}
                />
            </Grid>
          </Grid>
          <button>Update List </button>
        </form>
      </Paper>
    )
  }

}
