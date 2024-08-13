

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        const hoy = new Date();
        const fechaCaducidad = new Date(this.caducidad);
        return hoy > fechaCaducidad;
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        const dniRegex = /^[0-9]{8}[A-Za-z]$/;
        return dniRegex.test(this.numero);
    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        const words = "TRWAGMYFPDXBNJZSQVHLCKET";
        const number = parseInt(this.numero);
        const i = number % 23
        return words[i];
    }
}

const midni = new DNI("Pedro Vallés", "1234567", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni(this.numero));

