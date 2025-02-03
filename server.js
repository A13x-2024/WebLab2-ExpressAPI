const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;


// Middleware
app.use(express.json());

//Temporary placeholder
const NET_API_URL = "http://localhost:5013";


app.get("/potatoes", async (req, res) => {
    try{
        const response = await globalThis.fetch(`${NET_API_URL}/potatoes`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch data from .NET API"});
    }
});

app.post("/potatoes", async (req, res) => {
    try {
        const newData = req.body;

        // ✅ Debugging: Log request data
        console.log("Received data from frontend:", newData);

        if (!newData || !newData.name || !newData.type) {
            return res.status(400).json({ error: "Missing required fields: name and type" });
        }

        console.log("Sending data to .NET API:", newData); // ✅ Debugging before sending

        const response = await fetch(`${NET_API_URL}/potatoes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        });

        const result = await response.json();
        console.log("Response from .NET API:", result); // ✅ Debugging response
        res.json({ message: "Data sent successfully", response: result });

    } catch (error) {
        console.error("Error sending data to .NET API:", error); // ✅ Log any errors
        res.status(500).json({ error: "Failed to send data to .NET API" });
    }
});


app.listen(port, () => {
    console.log("Wallabilla it's running");
});