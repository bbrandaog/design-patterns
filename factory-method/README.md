# Factory Method: Transport Factory

## 🧠 Concept

The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. It helps you adhere to the **Open/Closed Principle** and allows object creation to vary independently from the code that uses them.

## 🧪 Use Case

This example simulates a delivery system where you can use different types of transport (`Car`, `Motorcycle`). The `TransportFactory` decides which type of transport to use and ensures that all delivery planning follows the same process.

## 🧱 Code Structure

- `Transport.ts`: Defines the `Transport` interface and concrete classes `Car` and `Motorcycle`.
- `TransportFactory.ts`: Contains the abstract factory and concrete factories (`CarFactory`, `MotorcycleFactory`).
- `main.ts`: Executes the delivery logic using different factories.

## ▶️ How to Run

```bash
npm install
npm run start
```

## 📈 Output

Delivering by car.
Delivering by motorcycle.

## 💡 Real-World Use Cases

Here are some common and practical examples where the Factory Method pattern is useful:

- **UI Component Libraries**  
  Create platform-specific UI components (e.g., buttons for Web, iOS, Android) using the same factory interface.

- **Notification Systems**  
  Dynamically choose between Email, SMS, Push, or in-app notifications based on user preferences or system settings.

- **Cloud Provider Integration**  
  Provision services (e.g., storage, VMs, functions) through factories that wrap cloud-specific SDKs like AWS, GCP, or Azure.

- **Payment Gateway Selector**  
  Depending on region or customer, select a payment processor (Stripe, PayPal, MercadoPago, etc.) without changing the main checkout flow.

- **Game Engines**  
  Instantiate different enemy or weapon types at runtime through a factory, making it easy to expand without modifying existing logic.

📝 Use Factory Method when:
- You want to delegate object creation to subclasses
- You want to isolate the instantiation logic from business logic
- You want to make adding new product types easy and safe
