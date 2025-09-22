<template>
    <h1>
        Keeled ja humanitaarteadused
    </h1>
    <div id="oppeained">
        <div>
            <h2>Eesti keel</h2>
            <p>6 kommentaari</p>
            <button>Vaata lähemalt</button>
        </div>
        <div>
            <h2>Inglise keel</h2>
            <button>Vaata lähemalt</button>
        </div>
        <div>
            <h2>Kirjandus</h2>
            <button>Vaata lähemalt</button>
        </div>
        <div>
            <h2>Ajalugu</h2>
            <p>7 kommentaari</p>
            <button>Vaata lähemalt</button>
        </div>
        <div>
            <h2>Filosoofia</h2>
            <button>Vaata lähemalt</button>
        </div>
        <div>
            <h2>Kunstiajalugu</h2>
            <button>Vaata lähemalt</button>
        </div>
    </div>
</template>

<script></script>

<style>
h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 2.5em;
}
#oppeained {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}
#oppeained div {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
#oppeained h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
}
#oppeained button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
#oppeained button:hover {
    background-color: #0056b3;
}
#oppeained button:focus {
    background-color: #6a6a6b;
}

#oppeained p {
    font-size: 1em;
    color: #555;
    margin-bottom: 10px;
}
</style>