import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IPlayer } from 'app/shared/model/player.model';
import { PlayerService } from './player.service';

@Component({
    selector: 'jhi-player-update',
    templateUrl: './player-update.component.html'
})
export class PlayerUpdateComponent implements OnInit {
    private _player: IPlayer;
    isSaving: boolean;
    creationDate: string;

    constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ player }) => {
            this.player = player;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.player.creationDate = moment(this.creationDate, DATE_TIME_FORMAT);
        if (this.player.id !== undefined) {
            this.subscribeToSaveResponse(this.playerService.update(this.player));
        } else {
            this.subscribeToSaveResponse(this.playerService.create(this.player));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPlayer>>) {
        result.subscribe((res: HttpResponse<IPlayer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get player() {
        return this._player;
    }

    set player(player: IPlayer) {
        this._player = player;
        this.creationDate = moment(player.creationDate).format(DATE_TIME_FORMAT);
    }
}
