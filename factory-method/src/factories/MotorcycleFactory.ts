import { TransportFactory } from './TransportFactory';
import { Transport } from '../transports/Transport';
import { Motorcycle } from '../transports/Motorcycle';

export class MotorcycleFactory extends TransportFactory {
  createTransport(): Transport {
    return new Motorcycle();
  }
}