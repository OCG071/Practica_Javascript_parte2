class AddTodo{
    constructor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    OnClick(callback){
        this.btn.onclick = () =>{
            if(this.title.value === '' || description.value === ''){
               // alert.innerText = 'Title and description are required';
               console.error('Incorrecto');
            }else{
                callback(this.title.value, this.description.value);
            }
        }
    }
}