import { Injectable } from "@angular/core";

@Injectable()

export class todoService{
    todoArray:string[] = [
        "Offer Fajr",
        "Offer Zohar",
        "Offer Asar",
        "Offer Maghrib",
        "Offer Ishaa"
        ];

    getTodos():string[]{
        return this.todoArray;
    }
    addTodo(data:HTMLInputElement):void{
        this.todoArray.push(data.value);
        console.log(this.todoArray)
    }
    deleteTodo(data:HTMLInputElement):void{
        var index = this.todoArray.indexOf(data.value);
        this.todoArray.splice(index,1);
        console.log(this.todoArray)
    }
    constructer(){

    }
}