//import commonmodule để sử dụng directive
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { DirectiveBT06Component } from './DirectiveBT06.component';

import { AntDModule } from '../_core/Shared/Antd/Antd.module';

@NgModule({
    declarations:[DirectiveBT06Component,BaiTapQLSPComponent],
    imports: [CommonModule,FormsModule,AntDModule],
    exports: [DirectiveBT06Component],
})

export class DirectiveBT06Module { }
