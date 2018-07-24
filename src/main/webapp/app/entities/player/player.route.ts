import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { Observable } from 'rxjs';
import { Player } from 'app/shared/model/player.model';
import { PlayerService } from './player.service';
import { PlayerComponent } from './player.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayerUpdateComponent } from './player-update.component';
import { PlayerDeletePopupComponent } from './player-delete-dialog.component';
import { IPlayer } from 'app/shared/model/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerResolve implements Resolve<IPlayer> {
    constructor(private service: PlayerService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((player: HttpResponse<Player>) => player.body);
        }
        return Observable.of(new Player());
    }
}

export const playerRoute: Routes = [
    {
        path: 'player',
        component: PlayerComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'Players'
        }
    },
    {
        path: 'player/:id/view',
        component: PlayerDetailComponent,
        resolve: {
            player: PlayerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Players'
        }
    },
    {
        path: 'player/new',
        component: PlayerUpdateComponent,
        resolve: {
            player: PlayerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Players'
        }
    },
    {
        path: 'player/:id/edit',
        component: PlayerUpdateComponent,
        resolve: {
            player: PlayerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Players'
        }
    }
];

export const playerPopupRoute: Routes = [
    {
        path: 'player/:id/delete',
        component: PlayerDeletePopupComponent,
        resolve: {
            player: PlayerResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Players'
        },
        outlet: 'popup'
    }
];
