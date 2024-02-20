import { TestBed } from '@angular/core/testing';

import { AnUploadfileService } from './an-uploadfile.service';

describe('AnUploadfileService', () => {
    let anUploadfileService: AnUploadfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnUploadfileService],
        });
        anUploadfileService = TestBed.inject(AnUploadfileService);
    });

    describe('getAnUploadfile$', () => {
        it('should return Observable<AnUploadfile>', () => {
            anUploadfileService.getAnUploadfile$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
