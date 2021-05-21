autosize(document.getElementById("note"));


const updateData = () =>{
    const textAreaData = document.querySelectorAll("textarea");
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem("notes", JSON.stringify(notes));
}


const addNewNote = ( textNote="" ) => {
       //creating details box for taking notes
       var note_card = document.createElement("div");
       note_card.classList.add("note_card");
   
       const htmlData = ` 
            <div class="head">
                <div class="edit"><i class='fa fa-edit'></i></div>
                <div class="delete"><i class="fa fa-trash-o"></i></div>
            </div>
            <div class="note_details">
                <div class="work ${textNote? '' : 'hidden'}"></div>
                 <textarea name="note" class="${textNote ? 'hidden' : '' }" id="note"> </textarea>
            </div>`;
   
       note_card.insertAdjacentHTML("afterbegin", htmlData);
   
      document.querySelector(".note_list").append(note_card);

        //all selection
        const editbtn = note_card.querySelector(".edit");
        const deletebtm = note_card.querySelector(".delete");
        const work = note_card.querySelector(".work");
        const textarea = note_card.querySelector("textarea");

        //delete the note
        deletebtm.addEventListener("click", function(){
            note_card.remove();
            updateData();
        })

        //toggle using edit button
        //var textAreaValue = textarea.value;
             work.innerHTML =textNote;
             textarea.value = textNote;

        


        editbtn.addEventListener("click", function(){
            work.classList.toggle("hidden");
            textarea.classList.toggle("hidden");
        })

        textarea.addEventListener("change", function(e){
            e.preventDefault;
            const value = e.target.value;
            work.innerHTML = value;


            updateData();
        })


}


//getting data from local storage
const notes = JSON.parse(localStorage.getItem("notes"));
console.log(notes);

if(notes){
    notes.forEach((note) => {
        console.log(note);
        addNewNote(note);
    });
    
}
var button = document.getElementById("btn");
button.addEventListener("click", () =>{
    addNewNote();
})

 










    /*let note_title = $("#note_title").val();
    let note = $("#note").val();
    window.localStorage.setItem(note_title, note);
   // window.localStorage.clear();
    console.log(note_title);*/

    /*var x = window.localStorage;
    console.log(x);*/

    /*Object.keys(x).forEach(function(currentElement) {
        console.log(currentElement);
        var work = localStorage.getItem(currentElement);
        console.log(localStorage.getItem(currentElement));
        document.querySelector(".title").innerHTML = currentElement;
        document.querySelector(".work").innerHTML = work;
       });*/


    /*for(var i =0; i < localStorage.length; i++){
        var work_title = window.localStorage.key(i);
        var work = localStorage.getItem(work_title)
        console.log(work_title);
        console.log(work);
        document.querySelector(".title").innerHTML = work_title;
        document.querySelector(".work").innerHTML = work;
        
    }*/







