import { PipeTransform, Pipe } from '@angular/core';
import { Note_data } from './Note_data';

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{

    transform( notes:Note_data[],searchText:string):Note_data[]{
        if(!notes )return [];
        if(!searchText) return notes;
        searchText=searchText.toLowerCase();

        return   notes.filter(notesData =>{
            return notesData.title.toLowerCase().includes(searchText);

        }
          
        )
            
    }
}