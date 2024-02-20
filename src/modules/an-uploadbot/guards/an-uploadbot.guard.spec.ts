import { TestBed } from '@angular/core/testing';

import { AnUploadbotGuard } from './an-uploadbot.guard';

describe('_Template Module Guards', () => {
    let anUploadbotGuard: AnUploadbotGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnUploadbotGuard],
        });
        anUploadbotGuard = TestBed.inject(AnUploadbotGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anUploadbotGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
