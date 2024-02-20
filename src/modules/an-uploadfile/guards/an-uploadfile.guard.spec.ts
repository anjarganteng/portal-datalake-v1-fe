import { TestBed } from '@angular/core/testing';

import { AnUploadfileGuard } from './an-uploadfile.guard';

describe('_Template Module Guards', () => {
    let anUploadfileGuard: AnUploadfileGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnUploadfileGuard],
        });
        anUploadfileGuard = TestBed.inject(AnUploadfileGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anUploadfileGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
