import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
      <button className="button-posision button-add material-symbols-outlined"
        onClick={ 
          (event) => {
            console.log('Le diste click ')
            console.log(event)
            console.log(event.target)
          }
        }>add
      </button>
    );
  }


  export { CreateTodoButton };