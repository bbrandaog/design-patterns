import { Transport } from './Transport';

export class Motorcycle implements Transport {
  deliver(): void {
	console.log('Delivering by motorcycle');
  }
}