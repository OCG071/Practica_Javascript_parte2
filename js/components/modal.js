export default class Modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
    }

    setValues(todo) {
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

    onClick(callback) {
        this.btn.onclick = () =>{
            if(this.title.value === '' || description.value === ''){
               // alert.innerText = 'Title and description are required';
               this.Alert.show('Title and description are required');
               return;
            }

            $('#modal').modal('toggle');

        }
    }
}