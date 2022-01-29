import {LitElement, html} from 'lit-element';
import { style } from "./todo-style";

class TodoItem extends LitElement {
  static get properties() {
    return {
      item: {type: String},
      deleteItem: {type: Function},
      list:{type:Array}
    };
  }
  static get styles() {
    return [style];
  }

  deleteItem(){
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || []
    const index = todoList.indexOf(this.item);
    if (index > -1) {
        todoList.splice(index, 1);
    }
    localStorage.setItem('litTodoList', JSON.stringify(todoList));
    location.reload();
  }
  render() {
    return html`
      <div class="todo-item">
        <span>${this.item}</span>
        <button
                class="todo-button"
                @click=${this.deleteItem}
                >Del
        </button>  
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);