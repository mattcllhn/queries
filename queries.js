//1 > db.bios.find({awards:{$exists:true}}).pretty();
//2 > db.bios.find({awards:{$exists:false}}).pretty();
//3 > db.bios.find({$or:[{contribs:"OOP"},{contribs:"UNIX"}]}).pretty();
//4> db.bios.find({"awards.award":"Turing Award"}).pretty();
//5> db.bios.find( { __id: { $gt: 1, $lt: 3 } } );
//6> db.bios.find({awards:{year:{$lt:2000}}}).pretty();
//7
