import { TestBed } from '@angular/core/testing';

import { AnProsesPortalDatalakeService } from './an-proses-portal-datalake.service';

describe('AnProsesPortalDatalakeService', () => {
    let anProsesPortalDatalakeService: AnProsesPortalDatalakeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnProsesPortalDatalakeService],
        });
        anProsesPortalDatalakeService = TestBed.inject(AnProsesPortalDatalakeService);
    });

    describe('getAnProsesPortalDatalake$', () => {
        it('should return Observable<AnProsesPortalDatalake>', () => {
            anProsesPortalDatalakeService.getAnProsesPortalDatalake$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
