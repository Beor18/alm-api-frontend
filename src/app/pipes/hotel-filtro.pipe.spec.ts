import { HotelFiltroPipe } from '../pipes/hotel-filtro.pipe';

describe('HotelFiltroPipe', () => {
  it('create an instance', () => {
    const pipe = new HotelFiltroPipe();
    expect(pipe).toBeTruthy();
  });
});
