export class ConfigManager {
    private static instance: ConfigManager;
    private config: Record<string, string>;

    private constructor() {
        //Load initial configuration (simulated)
        this.config = {
            ENV: "development",
            API_KEY: "123456-abcde",
        };
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public get(key: string): string | undefined {
        return this.config[key];
    }

    public set(key: string, value: string) {
        this.config[key] = value;
    }
}