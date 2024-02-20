import { TestBed } from '@angular/core/testing';

import { AnRefantasenaService } from './an-refantasena.service';

describe('AnRefantasenaService', () => {
    let anRefantasenaService: AnRefantasenaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRefantasenaService],
        });
        anRefantasenaService = TestBed.inject(AnRefantasenaService);
    });

    describe('getAnRefantasena$', () => {
        it('should return Observable<AnRefantasena>', () => {
            anRefantasenaService.getAnRefantasena$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
