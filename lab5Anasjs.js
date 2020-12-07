var artistname = ['System Of A Down','Linkin Park','Imagine Dragons','EPICA','Leo Moracchioli'];
var songtitle = ['Chop Suey!','Numb','Radioactive','Unleashed','Shape of You'];
var imageURL = ['img/145416_jandaman_system-of-a-down-2.jpg','img/d4hjbn5-be983ea8-1238-44bc-95e4-2097a7649a54.jpg','img/18a97c186a9f96414fdadd98e5a34f1a.png','img/thumb-1920-405415.jpg','img/moracchioli-leo-5d1029b7f278d.jpg'];
var embedcode = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/CSvFpBOe8eY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/kXYiU_JCYtU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/ktvTqknDobU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/qX48IuIrAMQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/vxJzZfrE9Sg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];

function loadsong(songnum) {
	var facesong = [artistname[songnum],songtitle[songnum],imageURL[songnum],embedcode[songnum]];
	document.querySelector("h1").innerHTML = facesong[0];
	document.querySelector("h2").innerHTML = facesong[1];
	document.querySelector("body").style.backgroundImage = 'url("' + facesong[2] + '")';
	document.querySelector("#mainsong").innerHTML = facesong[3];

}
function addnewsong() {
	var newartistname = prompt("Artist Name");
	artistname.push(newartistname);
	var newsongtitle = prompt("Song Title");
	songtitle.push(newsongtitle);
	var newimageURL = prompt("Image URL");
	imageURL.push(newimageURL);
	var newembedcode = prompt("Embed Code");
	embedcode.push(newembedcode);
	loadButtons();
	}

	function loadButtons() {
	document.querySelector("#buttons").innerHTML = "";
	
	for (var i=0;i<artistname.length;i++) {
	var newbuttonel = document.createElement("button");
	newbuttonel.innerHTML = artistname[i];
	newbuttonel.setAttribute('onclick', 'loadsong(' + i + ')');
	document.querySelector("#buttons").appendChild(newbuttonel);
	}
	}


var inp = document.querySelectorAll("input")
function formshhid() {
	if (document.querySelector("fieldset").style.display == "flex") {
		var inp = document.querySelectorAll("input")
		for (var i=0;i<inp.length;i++) {
		inp[i].value = "";
	}
	document.querySelector("fieldset").style.display = "none";
} else {document.querySelector("fieldset").style.display = "flex";}
	
}

function addform() {
	var inp = document.querySelectorAll("input")
	var newartistname = inp[0].value;
	artistname.push(newartistname);
	var newsongtitle = inp[1].value;
	songtitle.push(newsongtitle);
	var newimageURL = inp[2].value;
	imageURL.push(newimageURL);
	var newembedcode = inp[3].value;
	embedcode.push(newembedcode);
	
	document.querySelector("#buttons").innerHTML = "";
	
	for (var i=0;i<artistname.length;i++){
	var newbuttonel = document.createElement("button");
	newbuttonel.innerHTML = artistname[i];
	newbuttonel.setAttribute('onclick', 'loadsong(' + i + ')');
	document.querySelector("#buttons").appendChild(newbuttonel);
	}
	
	for (var t=0;t<inp.length;t++) {
		inp[t].value = "";
	}
	
	document.querySelector("fieldset").style.display = "none";


}













