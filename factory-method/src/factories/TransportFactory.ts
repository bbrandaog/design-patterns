import { Transport } from '../transports/Transport';

export abstract class TransportFactory {
  abstract createTransport(): Transport;
}