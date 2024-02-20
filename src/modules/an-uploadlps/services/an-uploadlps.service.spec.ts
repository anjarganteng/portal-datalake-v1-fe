import { TestBed } from '@angular/core/testing';

import { AnUploadlpsService } from './an-uploadlps.service';

describe('AnUploadlpsService', () => {
    let anUploadlpsService: AnUploadlpsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnUploadlpsService],
        });
        anUploadlpsService = TestBed.inject(AnUploadlpsService);
    });

    describe('getAnUploadlps$', () => {
        it('should return Observable<AnUploadlps>', () => {
            anUploadlpsService.getAnUploadlps$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
