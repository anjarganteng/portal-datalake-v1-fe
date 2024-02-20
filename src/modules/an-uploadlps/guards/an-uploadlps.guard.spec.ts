import { TestBed } from '@angular/core/testing';

import { AnUploadlpsGuard } from './an-uploadlps.guard';

describe('_Template Module Guards', () => {
    let anUploadlpsGuard: AnUploadlpsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnUploadlpsGuard],
        });
        anUploadlpsGuard = TestBed.inject(AnUploadlpsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anUploadlpsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
