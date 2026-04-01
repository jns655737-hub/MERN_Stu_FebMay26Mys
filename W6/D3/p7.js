//Introduction to buffers in node.js
//A buffers stores raw bytes,
//Here we create buffor directly from a String

const textBuffer=Buffer.from("B");

//the value in the buffer is the encode form of the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);




//Each character is stored internally as byte data
//for Standard ASCII letters there wil be a equivalant code
//Buffers stores numeric value between 0 to 255