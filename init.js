const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
}

Chat.insertMany([{
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date()
},
{
    from: "gauri",
    to: "neha",
    msg: "send me your notes",
    created_at: new Date()
},
{
    from: "tejas",
    to: "priyanka",
    msg: "Hi my sister",
    created_at: new Date()
},
{
    from: "priyanka",
    to: "tejas",
    msg: "hello, how are you?",
    created_at: new Date()
},
{
    from: "neha",
    to: "gauri",
    msg: "how may I help you?",
    created_at: new Date()
},
{
    from: "shobha",
    to: "tejas",
    msg: "hello daughter",
    created_at: new Date()
}
]);