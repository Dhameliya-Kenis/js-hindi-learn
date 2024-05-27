const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'java', 'py', 'cpp']
for (const key in programming) {
    console.log(key, ':', programming[key]);
}