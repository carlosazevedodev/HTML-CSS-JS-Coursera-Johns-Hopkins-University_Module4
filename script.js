let names = ['Yakoov','John','Jen','jason','paul','frank','laura','larry','paula','jim']

for (let i = 0; i< names.length; i++) {
    if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
        console.log('Goodbye ' + names[i]);
    } else{
        console.log('Hello ' + names[i])
    }    
}