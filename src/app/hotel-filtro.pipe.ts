import { Pipe, PipeTransform } from '@angular/core';
import { Hotels } from './hotel/hotel';


@Pipe({
    name: 'hotelFiltro'
})
export class HotelFiltroPipe implements PipeTransform {

    transform(value: Hotels[], filter: string): Hotels[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((movie: Hotels) =>
            movie.name.toLocaleLowerCase().search(filter) !== -1) : value;
    }

    private handleMap(res: any, id: string) {
        const data = <Hotels[]> res.json();
        // Return an initialized object
        if (id === '') {
            return {
                'name': ''
            };
        }
        const filtered = data.filter(m => m._id === id);
        return <Hotels> filtered[0];
}
}