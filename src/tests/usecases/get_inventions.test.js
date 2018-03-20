import getInventions from "../../usecases/get_inventions";

describe('get Inventions use case', function () {

    describe('when the api request fails', function () {
        beforeEach(function () {
            fetch = jest.fn(() => new Promise((resolve, reject) => reject({ data: "404" })));
        });

        it('should call observers error', done => {
            let observer = {
                error: () => {
                    done()
                }
            }
            getInventions({}, { observer })
        });
    });

    
    describe('when api request succeeds but no data', function() {
        beforeEach(function () {
            fetch = jest.fn(() => new Promise((resolve, reject) => resolve({ data: [] })));
        });

        it('should call observers no data method', done => {
            let observer = {
                noData: () => {
                    done()
                }
            }
            getInventions({}, { observer })
        });
        
    });

    describe('when api request succeeds with data', function() {
        let response = [{"id":1, "name": "name1"},{"id":2, "name": "name2"}];
        beforeEach(function () {
            fetch = jest.fn(() => new Promise((resolve, reject) => resolve({ data: response })));
        });

        it('should call observers no data method', done => {
            let observer = {
                success: (respData) => {
                    expect(respData).toEqual(response);
                    done()
                }
            }
            getInventions({}, { observer })
        });
        
    });
        


});

