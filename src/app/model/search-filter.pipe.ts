import { PipeTransform, Pipe } from '@angular/core';
import { Note_data } from './Note_data';

@Pipe({
    name:'SearchFilter'
})
export class SearchFilterPipe implements PipeTransform{
    transform( notes:Note_data[],searchText:string):Note_data[]{
        if(!notes || searchText){
            return notes
        }
        return notes.filter(notesData =>
            notesData.title.toLowerCase().indexOf(searchText.toLowerCase())!== -1);
    }
}