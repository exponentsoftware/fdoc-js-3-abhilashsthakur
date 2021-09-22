const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function arrayToObject(students){

// const obj=Object.assign({},students[0])

const objArray = students.map (student => Object.assign({} , student));

const toObj=objArray.map((item)=>( { ["name"] : item[0] , ["skills"] : item[1] , ["level"] : item[2] } ));

return toObj

}


console.log(arrayToObject(students,"myKey"))