const path = require('path');
const fs = require('fs');

const equalTerms = JSON.parse(fs.readFileSync(path.join(__dirname, 'equalTerms.json')));
const lookup = equalTerms.reduce((a,c, i)=>{
  a[c[0]] =  a[c[0]] || [];
  a[c[0]].push(i);

  a[c[1]] =  a[c[1]] || [];
  a[c[1]].push(i);

  return a;
},{});

module.exports = (a, b) => {
  const idx = lookup[a.toLowerCase()];
  if(idx && idx.length>0){
    const result = idx.filter(i=>equalTerms[i].includes(b.toLowerCase()));
    if(result.length > 0) return true;
  }

  return a === b
}