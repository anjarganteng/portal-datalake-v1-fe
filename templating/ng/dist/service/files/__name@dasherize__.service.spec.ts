import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>Service', () => {
    let <%= camelize(name) %>Service: <%= classify(name) %>Service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [<%= classify(name) %>Service],
        });
        <%= camelize(name) %>Service = TestBed.inject(<%= classify(name) %>Service);
    });

    describe('get<%= classify(name) %>$', () => {
        it('should return Observable<{}}>', () => {
            <%= camelize(name) %>Service.get<%= classify(name) %>$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
