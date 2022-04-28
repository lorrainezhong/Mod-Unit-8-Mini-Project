

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["image1", "image2","image3"];
	let action =["image1", "image2","image3"];
	let drama =["____", "____","____"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
    for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    //else if(genreInput==="action"){
    //for (let show of action){
    //$(".shows").append("<img src="+ show+">");
    //}
    //}
    //else if(genreInput==="______"){
    //for (let ______ of _______){
    //$("_____").append("<img src="+ show+">");
    //}
    //}
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	//comedy.push(suggestion);
    // console.log(comedy);
    //___genre2___.push(__variable from line 32____);
    //console.log(__genre2_____);
    //______.push(______);
    ///console.log(_______);

    
});