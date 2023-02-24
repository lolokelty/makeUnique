// Write your solution below:

function removeDuplicates(string) {
    return string
    .split('')
    .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .join('');
}

console.log(removeDuplicates('ilovehowyourhairlooksrightnow'))