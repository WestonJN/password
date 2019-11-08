var test= require ('../src/passwordChecker');
let password=""

describe('should check if password exists', function(){
    it("password is exists", function(){
        expect(password)
    });
});
describe('should check if password is longer than 8 characters', function(){
    it("password is longer than 8 characters", function(){
        expect(password.length <= 8)
    });
});
describe('should check if password has at least one lowercase letter', function(){
    it("password has at least one lowercase letter", function(){
        expect(password).toMatch(/[a-z]/)
    });
});

describe('should check if password has at least one uppercase letter', function(){
    it("password has at least one uppercase letter", function(){
        expect(password).toMatch(/[A-Z]/)
    });
});

describe('should check if password has at least one digit', function(){
    it("password has at least one digit", function(){
        expect(password).toMatch(/[0-9]/)
    });
});

describe('should check if password has at least one special character', function(){
    it("password has at least one special character", function(){
        expect(password).toMatch(/[!@#$%^&*()]/)
    });
});