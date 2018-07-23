import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPlayer } from 'app/shared/model/player.model';

type EntityResponseType = HttpResponse<IPlayer>;
type EntityArrayResponseType = HttpResponse<IPlayer[]>;

@Injectable({ providedIn: 'root' })
export class PlayerService {
    private resourceUrl = SERVER_API_URL + 'api/players';

    constructor(private http: HttpClient) {}

    create(player: IPlayer): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(player);
        return this.http
            .post<IPlayer>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    update(player: IPlayer): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(player);
        return this.http
            .put<IPlayer>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IPlayer>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IPlayer[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(player: IPlayer): IPlayer {
        const copy: IPlayer = Object.assign({}, player, {
            creationDate: player.creationDate != null && player.creationDate.isValid() ? player.creationDate.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.creationDate = res.body.creationDate != null ? moment(res.body.creationDate) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((player: IPlayer) => {
            player.creationDate = player.creationDate != null ? moment(player.creationDate) : null;
        });
        return res;
    }
}
