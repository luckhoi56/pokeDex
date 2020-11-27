import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatSelectModule} from '@angular/material/select';


import {MatRippleModule} from '@angular/material/core'; 
@NgModule({
    imports:[
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule

    ],
    exports:[
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule
        
    ]
})
export class DisplayMaterialModule{

}