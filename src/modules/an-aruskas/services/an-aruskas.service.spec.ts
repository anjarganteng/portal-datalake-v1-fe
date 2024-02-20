import { TestBed } from '@angular/core/testing';

import { AnAruskasService } from './an-aruskas.service';

describe('AnAruskasService', () => {
    let anAruskasService: AnAruskasService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAruskasService],
        });
        anAruskasService = TestBed.inject(AnAruskasService);
    });

    describe('getAnAruskas$', () => {
        it('should return Observable<AnAruskas>', () => {
            anAruskasService.getAnAruskas$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
