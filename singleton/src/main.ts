import { ConfigManager } from "./ConfigManager";

// STEP 1: Try to create two different instances of ConfigManager
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

console.log("config1 ENV: ", config1.get("ENV"));

// STEP 2: Change the config2
config2.set("ENV", "production");

// STEP 3: Check config1 and confirm that only one instance was created
console.log("config1 ENV after change: ", config1.get("ENV"));
console.log("Same instance? ", config1 === config2); //true