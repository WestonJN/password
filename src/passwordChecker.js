var test= require ('../test');
let password="Jackson.21!"

describe('should check if password exists', function(){
    it("password is exists", function(){
        expect(test.all().toEqual())
    });
});
describe('should check if password is longer than 8 characters', function(){
    it("password is longer than 8 characters", function(){
        expect(test.characterLength().toEqual())
    });
});
describe('should check if password has at least one lowercase letter', function(){
    it("password has at least one lowercase letter", function(){
        expect(test.lowercase().toEqual())
    });
});

describe('should check if password has at least one uppercase letter', function(){
    it("password has at least one uppercase letter", function(){
        expect(test.uppercase().toEqual())
    });
});

describe('should check if password has at least one digit', function(){
    it("password has at least one digit", function(){
        expect(test.digit().toEqual())
    });
});

describe('should check if password has at least one special character', function(){
    it("password has at least one special character", function(){
        expect(test.specialCharacter().toEqual())
    });
});