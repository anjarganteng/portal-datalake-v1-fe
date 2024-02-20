import { TestBed } from '@angular/core/testing';

import { AnInfraApmkGuard } from './an-infra-apmk.guard';

describe('_Template Module Guards', () => {
    let anInfraApmkGuard: AnInfraApmkGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnInfraApmkGuard],
        });
        anInfraApmkGuard = TestBed.inject(AnInfraApmkGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anInfraApmkGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
