import { TestBed } from '@angular/core/testing';

import { AnInfraApmkService } from './an-infra-apmk.service';

describe('AnInfraApmkService', () => {
    let anInfraApmkService: AnInfraApmkService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnInfraApmkService],
        });
        anInfraApmkService = TestBed.inject(AnInfraApmkService);
    });

    describe('getAnInfraApmk$', () => {
        it('should return Observable<AnInfraApmk>', () => {
            anInfraApmkService.getAnInfraApmk$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
