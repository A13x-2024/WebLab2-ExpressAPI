const express = require("express");
const app = express();
const cors = require("cors");
const fetch = globalThis.fetch || require("node-fetch");
app.use(express.json());
const port = 3000;

const NET_API_URL = "https://labb2-web-gpgmftgjahawhmg3.westeurope-01.azurewebsites.net";

app.get("/potatisar", async (req, res) => {
    try {
        const response = await fetch(`${NET_API_URL}/potatisar`);
        res.json(await response.json());
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch" });
    }
});

app.post("/potatis", async (req, res) => {
    try {
        const { name, type, rank } = req.body;
        if (!name || !type || !rank) return res.status(400).json({ error: "Missing required fields" });

        console.log("Sending to .NET API:", req.body);

        const response = await fetch(`${NET_API_URL}/potatis`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        res.json({ message: "Data sent", response: await response.json() });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to send data" });
    }
});

app.listen(port, () => {
    console.log("Wallabilla it's running!");
});
