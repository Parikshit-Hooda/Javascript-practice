//Spreading arrays

const first = ["val1", "val2"]; const second = ["val3", "val4"];

const combinedArr = [...first, ...second]; //combinedArr = ["val1", "val2", "val3", "val4"];

//spreading objects

const third = {key1: val1, key2: "val2"}; const fourth = {key3: val3, key4: "val4"};

const combinedObj = {...third, ...fourth} //combinedObj = {key1: val1, key2: "val2", key3: val3, key4: "val4"}

//Note: In case of duplicate keys while spreading, the key and value of the last object will be used. For example:

const third = {key1: 1, key2: "val2"}; const fourth = {key1: 2, key4: "val4"};

const combinedObj = {...third, ...fourth} //combinedObj = {key1: val1, key2: "val2", key3: val3, key4: "val4"} undefined combinedObj {key1: 2, key2: 'val2', key4: 'val4'}
