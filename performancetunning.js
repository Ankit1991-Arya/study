// ❌ Bad – Blocking entire file in memory
const fs = require("fs");
const data = fs.readFileSync("BBPL_Appointment letter_Ankit Kumar.pdf"); 
console.log("File size:", data.length);

// ✅ Good – Stream processing
const stream = fs.createReadStream("BBPL_Appointment letter_Ankit Kumar.pdf");
let total = 0;
stream.on("data", chunk => {
  total += chunk.length;
  console.log("Processed chunk:", chunk.length);
});
stream.on("end", () => console.log("Total size:", total));


/*
1. Async vs Sync

Once, I had an issue where our file upload service was blocking the event loop because we were using fs.readFileSync for large files.

I fixed it by using streams (fs.createReadStream) so files were processed in chunks. This reduced memory usage from ~1GB → ~200MB.

2. Database optimization

    In a reporting API, queries were taking 5s.

    Using indexes + caching in Redis, I reduced query times to <200ms

3. Avoiding blocking operations

    Found a bcrypt hashing issue (bcrypt.hashSync) blocking the loop.

    Migrated to bcrypt.hash (async) → allowed higher throughput for login requests.
*/