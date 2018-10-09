import React from 'react';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red'


const List = ({ list, onRemoveList= (f) => f, editingList= (f) => f }) => {
  return (
    <Paper style={{ margin:10 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Excerpt</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="single-list" key={list.id}>
            <TableCell>{list.title}</TableCell>
            <TableCell>{list.excerpt}</TableCell>
            <TableCell>
              <Button
                onClick={() => onRemoveList(list.id)}
                variant="contained"
                style={{
                  float: 'right',
                  backgroundColor: red[500],
                  color: 'white'
                }}
                >
                Erase
              </Button>
              <Button
                onClick={() => editingList(list.id)}
                variant="contained"
                style={{
                  float: 'right',
                  backgroundColor: red[500],
                  color: 'white',
                  marginLeft: '50px'
                }}
                >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

export default List
