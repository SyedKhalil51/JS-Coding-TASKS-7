// A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’

var games = ['Cricket','Hockey','Football','baseBall','Tenis'];
for(var i = 0; i<games.length; i++)
{
    if(games[i]="Cricket","Hockey","Football","Basketball")
    {
        document.write("Cricket Exists");
    }
    else
    {
        document.write("Does not exist");
    }
}

// 2) Problem Name: indexOf
//Use indexOf function to attempt the same problem and print index of ‘Cricket’ member

var index_game = games.indexOf("Cricket");
console.log(index_game);

//3) Problem Name: lastIndexOf
//Use the lastIndexOf function to find a ‘Cricket’ member. Start from the 3rd index and print its index.

var last_index_game = games.lastIndexOf("Cricket");
console.log(last_index_game);

//4) Problem Name: FilterArray
//Use filter function to filter an array containing values of ages of [40, 56, 80, 90, 100, 101, 102, 23, 22] Use it to filter the ages greater than or equal to 40.

var ages =[40, 56, 80, 90, 100, 101, 102, 23, 22];
var criteria = ages.filter(check_Age);
console.log(criteria);
function check_Age(age)
{
    return age>=40;
}

