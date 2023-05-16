const var1 = ['amazon','bard','cognigant','pw skills','doodle','email','facebook','google','pw skills','hashnode'];
console.log(var1.lastIndexOf('pw skills'));     //expected output 8

//we find the last index of 'pw skills', now we have to find if there are any previous occurances

console.log(var1.lastIndexOf('pw skills',7));       //since we got the last index of 'pw skills' is 8, so here we pass 7 as the formindex and the search will start from backwards now. and we will get 3 as output