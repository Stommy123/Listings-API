import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const NewListForm = ({ onNewList = f => f }) => {
  let title;
  let excerpt;
  const submit = (e) => {
    e.preventDefault()
    onNewList(title.value, excerpt.value)
    title.value = ''
    excerpt.value = ''
    title.focus()
  }
  return (
    <Paper style={{margin: 10, padding: 10}}>
      <form
        onSubmit={submit}
        style={{display: 'flex', flexWrap: 'wrap'}}
        noValidate
        >
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              <input ref={input => title = input}
                type="text"
                placeholder="Title..." required />
            </Grid>
            <Grid item md={4} xs={12}>
              <input ref={input => excerpt = input}
                type="text"
                placeholder="Excerpt..." required />
            </Grid>
          </Grid>
          <button>Add List</button>
        </form>
      </Paper>
  )
}


export default NewListForm
