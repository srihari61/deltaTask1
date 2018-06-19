var menteeName=document.getElementById("one").value;
var menteeComment=document.getElementById("two").value;
var menteeRating=document.getElementById("three").value;
var data={"textName":menteeName, "textRating":menteeRating, "textComment":menteeComment};
        
var oneent=document.getElementById("one");
var twoent=document.getElementById("two");
var threeent=document.getElementById("three");  
var fourent=document.getElementByClassName("btn-group");
var li;


let itemsArray = [];

let items;

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'));
} else {
  items = [];
}

localStorage.setItem('items', JSON.stringify(itemsArray));
const retrieve = JSON.parse(localStorage.getItem('items'));

function buttonMaker(data1)
{
 
    /*  const deleteButton=document.getElemenbutton');
    deleteButton.addEventListener("click",function delete()
    {
        // Remove mentee   
    } 
    );  */

    const li = document.createElement('button');
    
     li.textName = data1.textName;
     li.textRating =data1.textRating;
     li.textComment = data1.textComment;
     li.textButton=showButton();
     /* li.textButton= document.createElement('button');
     li.textButton.addEventListener("click",function toHide()
     {
        //delete the button
     }
        ); */ 
     li.setAttribute("class","buttonNumber") ;  
    fourent.appendChild(li);
}
    


 /* var showButton=document.getElementByClassName("buttonNumber").textButton.addEventListener("click",function (
    )
 {
     li.setAttribute("id","deleteThis");
      
document.getElementById("deleteThis").style.input="submit";
document.getElementById("deleteThis").style.value="Remove Mentee";
 }) ;             */

function showButton()
{
 li.setAttribute("id","deleteThis");
var element = document.createElement("button");
element.style.value="Remove Mentee";
return document.getElementByClassName('buttonNumber').appendChild(element);
 //document.body.appendChild(element);
 }

var deleteItem = function(index) {
    var divElements = document.getElementsByClassName("buttonNumber");
    for (var i = 0; i < divElements.length; i++) {
    if (i == index) {
        divElements[i].parentNode.removeChild(divElements[i]);
        localStorage.removeItem("items");
        break;
    }
  }
};

var deleteButtons = document.getElementsByClassName("buttonNumber");

for (var i = 0; i < deleteButtons.length; i++) {
    (function(index){                                                                                         //function(index)
        deleteButtons[i].getElementById("deleteThis").addEventListener('click', function() {
          deleteItem(index);
        }, false); 
    })(i);    
}



document.getElementById("inputSignal").addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(data);
localStorage.setItem('items', JSON.stringify(itemsArray));

  buttonMaker(data);
  //data={"textName":menteeName, "textRating":menteeRating, "textComment":menteeComment};
  menteeName="";
  menteeRating="";
  menteeComment=""; 

  
});

retrieve.forEach(item => {
  liMaker(item);
});


document.getElementById("inputSignal").addEventListener("click",function(e)
    {
        e.preventDefault();
       /* buttonMaker(menteeName,menteeRating,menteeComment);
        menteeName="";
        menteeRating="";
        menteeComment="";    */
        data={"textName":menteeName, "textRating":menteeRating, "textComment":menteeComment};
        menteeName="";
        menteeRating="";
        menteeComment=""; 
    }
   
);





















   /* li.addEventListener("click",function()
    {
        li.textName = text1;
        li.textRating = number1;
        li.textComment = text2;  
                       
    display the three assigned properties  
}
  btn-group.appendChild('li');     */

 
 /*document.getElementById("inputSignal").addEventListener("click",function(e)
    {
        e.preventDefault();
        buttonMaker(menteeName,menteeRating,menteeComment);
        menteeName="";
        menteeRating="";
        menteeComment="";    
        data={"textName":menteeName, "textRating":menteeRating, "textComment":menteeComment};
        menteeName="";
        menteeRating="";
        menteeComment=""; 
    }
   
localStorage.setItem('user-1',JSON.stringify(data));   */ 



/*
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p3 = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p3.appendChild(newElement);
    document.getElementById(elementId).style.display="block";
}
function addElement1(parentId1, elementTag1, elementId1, html1) {
    // Adds an element to the document
    var p1 = document.getElementById(parentId1);
    var newElement1 = document.createElement(elementTag1);
    newElement1.setAttribute('id', elementId1);
    newElement1.innerHTML = html1;
    p1.appendChild(newElement1);
    document.getElementById(newElement1).style.display="none";
}
function addElement2(parentId2, elementTag2, elementId2, html2) {
    // Adds an element to the document
    var p2 = document.getElementById(parentId2);
    var newElement2 = document.createElement(elementTag2);
    newElement2.setAttribute('id', elementId2);
    newElement2.innerHTML = html2;
    p2.appendChild(newElement2);
    }
*/
