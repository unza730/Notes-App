const addbtn = document.getElementById("add");

const updateData = () =>{
const textAreaData = document.querySelectorAll("textarea");
const notes = [ ];
textAreaData.forEach((note)=>{
    return notes.push(note.value);
});
localStorage.setItem("notes", JSON.stringify(notes));
}

const addNote = (text= " ") =>{
    const notes = document.createElement('div');
    notes.classList.add("note");
    const htmlData = `<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text?"":"hidden"}"></div>
<textarea class="${text ? "hidden":" "} "></textarea>
    `;
    notes.insertAdjacentHTML("afterbegin",htmlData);
   document.body.appendChild(notes)
    let edit = notes.querySelector('.edit');
    let del = notes.querySelector('.delete');
    let mainDiv = notes.querySelector('.main');
    let textArea = notes.querySelector('textarea');

    del.addEventListener("click",function(){
        notes.remove();
        updateData();
    });
    textArea.value = text;
    mainDiv.innerHTML = text;
    edit.addEventListener("click", function(){
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });
    textArea.addEventListener("change", function(event){
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateData();
    });
}
// getting data from loca storage
const notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach((note) =>  addNote(note));
}
addbtn.addEventListener('click', () =>{
   addNote();
   console.log('im clicked');
});
  