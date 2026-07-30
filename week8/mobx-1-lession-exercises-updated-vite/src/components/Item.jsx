import React, { Component } from 'react';
import { observer } from 'mobx-react'


class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let newLocation = prompt("choose location")
    if (newLocation === null || newLocation.trim() === "")
      return
    this.props.store.editItem(e.target.value, newLocation)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed? "crossed": null}>
        <input 
          type="checkbox"
          onClick= {this.checkItem}
          value = {item.name}/>

        <span>{item.name}</span>
        <span> - {item.location}</span>
        <button className='editButton' value={item.name} onClick={this.editItem}>edit</button>
        <button value={item.name} onClick={this.deleteItem}>delete</button>

      </div>
    )
  }
}

export default observer(Item)