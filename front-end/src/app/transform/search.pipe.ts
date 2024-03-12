import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allplayers:any=[],searchterm:string,property:string):any[] {

    let result: any = []
    
    if (!allplayers || searchterm === " " || property === " ") {
      return allplayers
      
    } else {
      allplayers.forEach((item: any) => {
        if (item[property].trim().toLowerCase().includes(searchterm.trim().toLowerCase())) {
          result.push(item)
        }
      })
    }

    return result
    
  }

}
