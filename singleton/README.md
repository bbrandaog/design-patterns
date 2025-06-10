# Singleton: ConfigManager

## 🧠 Concept

The Singleton pattern ensures that a class has only **one instance** and provides a **global point of access** to it.

## 🧪 Use Case

This example simulates a simple configuration manager (`ConfigManager`) where different parts of an application access shared settings such as environment, API keys, etc.

This avoids multiple instances and ensures consistent configuration values across the app.

## 🧱 Code Structure

- `ConfigManager.ts`: Implements the Singleton pattern and stores key-value configurations.
- `main.ts`: Demonstrates usage of the singleton and verifies the instance is shared.

## ▶️ How to Run

```bash
npm install
npm run start
```

## 📈 Output

Two different variables (`config1` and `config2`) reference the **same instance** of `ConfigManager`.

```bash
config1 ENV: development
config1 ENV after change: production
Same instance? true
```

## 💡 Real-World Use Cases

Here are some common and practical examples where the Singleton pattern is useful:

- **Configuration Manager**  
  Ensures a single source of truth for app-wide environment variables and settings.

- **Logger**  
  All modules log through the same instance, maintaining centralized and consistent logging.

- **Database Connection Pool**  
  Manages a single connection instance or shared pool across multiple parts of the application.

- **Cache Manager**  
  Prevents redundant API calls or database hits by using a shared in-memory cache instance.

- **Authentication Service**  
  Maintains the session or token of the logged-in user across the entire app.

- **Service Locator / Dependency Injector**  
  Manages shared service instances through a centralized container.

- **Game State Manager (in games)**  
  Keeps global game information like score, level, and settings consistent and synchronized.

📝 Use Singleton when you need **shared state** or **a single control point** across your app.
