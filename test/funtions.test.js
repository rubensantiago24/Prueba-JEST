const funtions = require('../funtions');


test('Agregue 2 + 2 para igualar 4', () => {
    expect(funtions.add(2, 2)).toBe(4);
});

test('Agrega 2 + 2 para NO ser igual a 5', () => {
    expect(funtions.add(2, 2)).not.toBe(5);
});

test('Debe ser nulo', () => {
    expect(funtions.isNull()).toBeNull();
});

test('Debe ser falso', () => {
    expect(funtions.checkValue(undefined)).toBeFalsy();
});

test('El usuario debe ser Ruben Torres', () => {
    expect(funtions.createUser()).toEqual({
        PrimerNombre: 'Ruben',
        SegundoNombre: 'Torres'
    });
});

test('Debe ser menor de 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});


//REGEX
test('I No esta en el equipo', () => {
    expect('team').not.toMatch(/I/);
});

//ARAYS
test('El admin esta en los usuarios', () => {
    usernames = ['Ruben', 'Julio', 'admin'];
        expect(usernames).toContain('admin');
        console.log('Se encontro el nombre que se buscaba');

    
});

//TRABAJANDO CON data async
test('Debe traer un titulo y un body', () => {
    expect.assertions(1);
    return funtions.fetchUser().then(data => {
        expect(data.title).toEqual('Hola Trajo el title');
    });
});

