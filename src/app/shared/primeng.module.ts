import { NgModule } from "@angular/core";

import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule ({
    imports: [
        SidebarModule,
        PanelMenuModule,
        CardModule,
        TableModule,
        ButtonModule,
        TagModule,
        InputTextModule,
        DropdownModule
    ],
    exports: [
        SidebarModule,
        PanelMenuModule,
        CardModule,
        TableModule,
        ButtonModule,
        TagModule,
        InputTextModule,
        DropdownModule
    ]
})
export class PrimeNGModule {

}