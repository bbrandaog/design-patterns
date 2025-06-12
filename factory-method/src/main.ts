import { CarFactory } from './factories/CarFactory';
import { MotorcycleFactory } from './factories/MotorcycleFactory';
import { TransportFactory } from './factories/TransportFactory';

function runDelivery(factory: TransportFactory) {
  const transport = factory.createTransport();
  transport.deliver();
}

console.log('--- Delivery by Car ---');
runDelivery(new CarFactory());

console.log('--- Delivery by Motorcycle ---');
runDelivery(new MotorcycleFactory());