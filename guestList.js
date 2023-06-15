let guests = []  
let input
let changeName 
let nameRemove
let nameAdd
let nameRemoveIndex


while (true) {
    input = prompt (`Enter a name to add to the guest list`)  // adding names to the list

    guests.push (input)
    if (guests.length > 10) {  // declaring max number of names 
        changeName = prompt (`You have already added 10 people to your guest list. Would you like to
        replace someone on the list with this person? y/n: `)  // this will show when an 11th name is entered

            if (changeName == "y") {
                nameRemove = prompt ( `${guests} who would you like to take out?`)  // user selects a name off the list to remove
               nameRemoveIndex = guests.indexOf(nameRemove)  // index of name to remove is declared
               let nameAdd = guests[10] // 10 is the 11th name added, to replace nameRemove
                guests[nameRemoveIndex] = nameAdd  // name is replaced
                break

            }
            if (changeName == "n"){
        break}}
        
    }

    guests.pop(10)  // remove the extra name entered as it has been added eleswhere
for (let guest of guests) {  // printing the guest list
    console.log (guest)
}