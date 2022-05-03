import Alert from './alert.js';

export default class AddTodo{
    constructor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.Alert = new Alert()
    }

    OnClick(callback){
        this.btn.onclick = () =>{
            if(this.title.value === '' || description.value === ''){
               // alert.innerText = 'Title and description are required';
               this.Alert.show('Title and description are required');
            }else{
                this.Alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}