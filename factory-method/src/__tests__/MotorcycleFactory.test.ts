import { MotorcycleFactory } from '../factories/MotorcycleFactory';
import { Motorcycle } from '../transports/Motorcycle';

describe('MotorcycleFactory', () => {
  it('should create a Motorcycle instance', () => {
    const factory = new MotorcycleFactory();
    const transport = factory.createTransport();

    expect(transport).toBeInstanceOf(Motorcycle);
  });

  it('should call deliver method', () => {
    const factory = new MotorcycleFactory();
    const transport = factory.createTransport();

    const spy = jest.spyOn(transport, 'deliver');
    transport.deliver();

    expect(spy).toHaveBeenCalled();
  });
});