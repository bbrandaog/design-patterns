import { TransportFactory } from './TransportFactory';
import { Transport } from '../transports/Transport';
import { Car } from '../transports/Car';

export class CarFactory extends TransportFactory {
  createTransport(): Transport {
	return new Car();
  }
}