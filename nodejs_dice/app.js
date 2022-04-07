const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/calculate", (req, res) => {
    console.log("get a request");
    console.log(req.body);

    const value1 = req.body.value1;
    const value2 = req.body.value2;

    let rowResult = 0;
    let row = 0;
    let counter = parseInt(value2);
    // rowResult = Math.floor((Math.random() * (parseInt(value1))) + 1);

    console.log(`number of rows: ${counter}`);
    console.log("-----------");
    console.log(`rowResult: ${rowResult}`);
    

    for(i=0; i<counter; i++) {
        row = Math.floor((Math.random() * (parseInt(value1))) + 1);
        console.log(`row no ${i+1}: ${row}`);
        console.log("-----------")
        rowResult += row;
        console.log(`rowResult: ${rowResult}`);
        console.log("-----------")
    };

    const result = rowResult;
    // const result = parseInt(value1) ** parseInt(value2);
    // const result = parseInt(value1) + parseInt(value2);

    res.send({ result: result, ok: "all looking good!"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});