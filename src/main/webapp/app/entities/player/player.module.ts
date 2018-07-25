import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {PlayerManagerSharedModule} from 'app/shared';
import {
    PlayerComponent, PlayerDeleteDialogComponent, PlayerDeletePopupComponent, PlayerDetailComponent,
    playerPopupRoute, playerRoute, PlayerUpdateComponent
} from './';

const ENTITY_STATES = [...playerRoute, ...playerPopupRoute];

@NgModule({
    imports: [PlayerManagerSharedModule, NgSelectModule, FormsModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PlayerComponent, PlayerDetailComponent, PlayerUpdateComponent, PlayerDeleteDialogComponent, PlayerDeletePopupComponent],
    entryComponents: [PlayerComponent, PlayerUpdateComponent, PlayerDeleteDialogComponent, PlayerDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerManagerPlayerModule {
}
