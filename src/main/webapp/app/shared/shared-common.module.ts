import { NgModule } from '@angular/core';

import { PlayerManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PlayerManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PlayerManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PlayerManagerSharedCommonModule {}
