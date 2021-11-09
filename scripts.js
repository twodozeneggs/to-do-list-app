function newItem (){

    //add new item to jquery
    let li = $('<li></li>');
    let inputValue= $('#input').val();
    li.append (inputValue);

    if (inputValue === '') {
        alert('You muast write something!')
    } else {
            $('#list').append(li);
            $('#input').val('')
    }

    //crossing items put on list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    //add delete button

    let deleteButton = $('<deleteButton></deleteButton');

    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    function deleteListItem(){
        li.addClass('delete');
    }
    deleteButton.on('click', deleteListItem);

    $('#list').sortable()
}