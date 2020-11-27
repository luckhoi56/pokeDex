import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
@NgModule({
    imports:[
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule

    ],
    exports:[
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class DisplayMaterialModule{

}