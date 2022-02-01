let quit = 0;
const todo = [];
let task = prompt('Tell me a action');
while (task !== 'quit'){
    if (task==='add'){
        let toAdd = (prompt('Tell me what to add or just press enter to go back'));
        if (toAdd === '') break
        else{
            todo.push(toAdd)
        }
    }
    else if (task==='remove'){
        let toRemove = parseInt(prompt('Tell me the index to remove or just press enter to go back'));
        if (toRemove === '') break
        else{
            todo.splice(toRemove,1)
        }
    }
    else if (task==='list'){
        console.log('***********')
        for(let i=0;i<todo.length;i++){
            console.log(`${i}. ${todo[i]}`)
        }
        console.log('***********')
    }
    else if (task==='quit'){
        console.log('Okay, goodbye!')
        break
    }
    task = prompt('Tell me a action');
}
