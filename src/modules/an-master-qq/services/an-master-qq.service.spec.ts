import { TestBed } from '@angular/core/testing';

import { AnMasterQqService } from './an-master-qq.service';

describe('AnMasterQqService', () => {
    let anMasterQqService: AnMasterQqService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMasterQqService],
        });
        anMasterQqService = TestBed.inject(AnMasterQqService);
    });

    describe('getAnMasterQq$', () => {
        it('should return Observable<AnMasterQq>', () => {
            anMasterQqService.getAnMasterQq$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
