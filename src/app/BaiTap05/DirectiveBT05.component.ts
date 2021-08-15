import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive-BT05',
    template: `
        <div class="container" style="margin-bottom:500px">
            <hr />
            <h3>Bài tập login</h3>
            <app-baitap-login></app-baitap-login>
            <hr />
      
        </div>
    `
})
export class DirectiveBT05Component implements OnInit {

    fontSize:number =  15;

    tangFont = () => {
        this.fontSize += 2;
    }

    giamFont = () => {
        this.fontSize -= 2;
    }

    arrProduct:any[] = [
        {id:1,name:'Phone 1', price:1000, image:'https://picsum.photos/id/1/200/200'},
        {id:2,name:'Phone 2', price:1000, image:'https://picsum.photos/id/2/200/200'},
        {id:3,name:'Phone 3', price:1000, image:'https://picsum.photos/id/3/200/200'},
    ]

 
    color:string = 'green'
    isLogin: boolean = false;
    userName: string = 'cybersoft';
    status: boolean = true;
    number: number = 3;
    constructor() { }
    ngOnInit() { }
    changeNumber = (num: string) => {
        this.number = Number(num);
    }
    login = ()=>{
        this.isLogin = true;
    }
    logout = () => {
        this.isLogin = false;
    }
    anHien = () => {
        this.status = !this.status;
    }
}