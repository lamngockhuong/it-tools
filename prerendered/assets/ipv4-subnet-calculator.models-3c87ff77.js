function e({ip:t}){const[r]=t.split(".").map(Number);if(r<128)return"A";if(r>127&&r<192)return"B";if(r>191&&r<224)return"C";if(r>223&&r<240)return"D";if(r>239&&r<256)return"E"}export{e as g};
