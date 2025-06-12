import { Transport } from './Transport';

export class Car implements Transport {
  deliver(): void {
	console.log('Delivering by car');
  }
}