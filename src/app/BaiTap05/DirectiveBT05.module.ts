//import commonmodule để sử dụng directive
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './BaiTapLogin.component';
import { DirectiveBT05Component } from './DirectiveBT05.component';

import { AntDModule } from '../_core/Shared/Antd/Antd.module';

@NgModule({
    declarations:[DirectiveBT05Component,BaiTapLoginComponent],
    imports: [CommonModule,FormsModule,AntDModule],
    exports: [DirectiveBT05Component],
})

export class DirectiveBT05Module { }
