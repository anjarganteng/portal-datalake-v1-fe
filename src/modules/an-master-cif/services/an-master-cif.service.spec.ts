import { TestBed } from '@angular/core/testing';

import { AnMasterCifService } from './an-master-cif.service';

describe('AnMasterCifService', () => {
    let anMasterCifService: AnMasterCifService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMasterCifService],
        });
        anMasterCifService = TestBed.inject(AnMasterCifService);
    });

    describe('getAnMasterCif$', () => {
        it('should return Observable<AnMasterCif>', () => {
            anMasterCifService.getAnMasterCif$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
