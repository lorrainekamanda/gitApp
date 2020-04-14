import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: any):any  {
 
    
    let nameDate:Date = new Date();
    let publishDate:any = new Date(nameDate.getFullYear(),nameDate.getMonth(),nameDate.getDate());
    let setDate  = Math.abs(publishDate-value)
    const seconds = 86400;
    let subSeconds = setDate *0.001
    let countDate = subSeconds/seconds
              if(countDate>=0.5) {
                return Math.ceil(countDate) + " " + "days ago"
            } 
            else{
                return 'Just Now'
            }
           
            }

}
