import React, { Component } from 'react'
import axios from 'axios'
import List from './List'
import NewListForm from './NewListForm'
import EditListForm from './EditListForm'

export default class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
    this.addNewList = this.addNewList.bind(this)
    this.removeList = this.removeList.bind(this)
    this.editList = this.editList.bind(this)
    this.editingList = this.editingList.bind(this)
  }

  async componentDidMount() {
    let data;
    let lists;
    data = await axios.get('/api/v1/lists')
    lists = data.data
    this.setState({lists})
    console.log(this.state.lists)
  }

  async addNewList(title, excerpt) {
    let data;
    data = await axios.post('/api/v1/lists', { list: {title, excerpt} })
    const lists = [...this.state.lists, data.data]
    this.setState({lists})
  }

  async removeList(id) {
    let data;
    data = await axios.delete('/api/v1/lists/' + id)
    const lists = this.state.lists.filter(
      list => list.id !== id
    )
    this.setState({lists})
  }

  async editList(id, title, excerpt) {
    let data;
    data = await axios.put('./api/v1/lists/' + id, {
      list: { title, excerpt }
    })
    const lists = this.state.lists;
    lists[id-1] = {id, title, excerpt}
    this.setState(() => ({
      lists,
      editingListId: null
    }))
  }

  async editingList(id) {
    this.setState({
      editingListId: id
    })
  }

  render() {
    return (
      <div className="main">
        <div className="Lists-container">
          {
            this.state.lists.map(list => {
              if (this.state.editingListId === list.id) {
                return (
                  <EditListForm
                    list={list}
                    key={list.id}
                    editList={this.editList}
                  />)
              } else {
                  return (
                    <List
                      list={list}
                      key={list.id}
                      onRemoveList={this.removeList}
                      editingList={this.editList}
                    />)
                }
            })}
        </div>
        <div className="new">
          <NewListForm onNewList={this.addNewList} />
        </div>
      </div>
    )
  }
}
