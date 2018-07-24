import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { PlayerManagerSharedLibsModule, PlayerManagerSharedCommonModule,  HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [PlayerManagerSharedLibsModule, PlayerManagerSharedCommonModule],
    declarations: [ HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [],
    exports: [PlayerManagerSharedCommonModule,  HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerManagerSharedModule {}
