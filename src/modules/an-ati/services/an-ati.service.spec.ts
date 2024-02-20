import { TestBed } from '@angular/core/testing';

import { AnAtiService } from './an-ati.service';

describe('AnAtiService', () => {
    let anAtiService: AnAtiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAtiService],
        });
        anAtiService = TestBed.inject(AnAtiService);
    });

    describe('getAnAti$', () => {
        it('should return Observable<AnAti>', () => {
            anAtiService.getAnAti$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
