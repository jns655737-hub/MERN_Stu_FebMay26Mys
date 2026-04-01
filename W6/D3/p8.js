//Allocating buffers 

const emptyBuffer=Buffer.alloc(8);
console.log("content of emptybuffers",emptyBuffer);
console.log("Allocation buffer bytes:",[...emptyBuffer]);

const textBuffer=Buffer.from([65,33,23]);
console.log("Buffer from byte array:",textBuffer);

//Buffer.write() write text into the buffer
const buffer=Buffer.alloc(20);
const bytesWritten=buffer.write("HelloWorld");
console.log("Bytes written:",bytesWritten);

//Subarray
const firstSlice=buffer.subarray(3,6);
console.log("First slice as bytes:",[...firstSlice]);

//decode the bytes into text:toString()
console.log("Decoded FirstSlice of buffer:",firstSlice.toString("utf8"));
