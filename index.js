var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });

const current_time = Date.now()

client.on("ready", () => {
  console.log("Rich Presence is now active!");
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "Mutliplayer Mode",

      timestamps: {
        start: current_time,
      },
      
      assets: {
        large_image: "gamelogo",
        large_text: "v0.861 Beta",
      },
      buttons: [{label: "Get GTA VI", url: "https://bit.ly/gta-6-join-game"}, {label: "Join Beta", url: "https://bit.ly/gta-6-join-game" }]
    },
  });
});
client.login({ clientId: "880323834773921863" }).catch(console.error);
