import { CarFactory } from '../factories/CarFactory';
import { Car } from '../transports/Car';

describe('CarFactory', () => {
  it('should create a Car instance', () => {
    const factory = new CarFactory();
    const transport = factory.createTransport();

    expect(transport).toBeInstanceOf(Car);
  });

  it('should call deliver method', () => {
  const factory = new CarFactory();
  const transport = factory.createTransport();

  const spy = jest.spyOn(transport, 'deliver');
  transport.deliver();

  expect(spy).toHaveBeenCalled();
});
});