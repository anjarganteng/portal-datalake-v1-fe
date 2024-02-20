import { TestBed } from '@angular/core/testing';

import { AnUploadbotService } from './an-uploadbot.service';

describe('AnUploadbotService', () => {
    let anUploadbotService: AnUploadbotService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnUploadbotService],
        });
        anUploadbotService = TestBed.inject(AnUploadbotService);
    });

    describe('getAnUploadbot$', () => {
        it('should return Observable<AnUploadbot>', () => {
            anUploadbotService.getAnUploadbot$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
