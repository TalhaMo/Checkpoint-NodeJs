const fs=require('fs')

fs.writeFile('hello-world.js','HELLO WORLD',err=>{
	if(err){throw(err)}
		else{console.log('HELLO WORLD')}
})