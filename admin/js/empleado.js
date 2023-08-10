let empleados = [

    {
        "id": 1,
        "fechaContratacion": "20/09/2021",
        "clave": "KLMN8754309178JKL",
        "email": "juan@gmail.com",
        "puesto": "Asistente Administrativo",
        "salarioBruto": 9500.00,
        "estatus": 1,
        "persona": {
            "id": 11,
            "nombre": "Juan",
            "apellidoPaterno": "Martínez",
            "apellidoMaterno": "López",
            "genero": "H",
            "fechaNacimiento": "10/11/1998",
            "rfc": "MALJ981110HJ6",
            "curp": "MALJ981110HDFKLPKL4",
            "foto": "",
            "domicilio": "Calle 5 de Mayo, No. 100",
            "cp": "37020",
            "ciudad": "León",
            "estado": "Guanajuato",
            "telefono": "4777894561"
        },
        "usuario": {
            "id": 111,
            "nombreUsuario": "juanmar99",
            "contrasenia": "juanmar_pass",
            "rol": "EMPS"
        }
    },
    {
        "id": 2,
        "fechaContratacion": "03/12/2020",
        "clave": "KJBV7609324578HJK",
        "email": "ana@hotmail.com",
        "puesto": "Contador",
        "salarioBruto": 13000.00,
        "estatus": 1,
        "persona": {
            "id": 22,
            "nombre": "Ana",
            "apellidoPaterno": "Gómez",
            "apellidoMaterno": "Ramírez",
            "genero": "M",
            "fechaNacimiento": "25/07/1990",
            "rfc": "GORA900725MH6",
            "curp": "GORA900725MDFPLK21",
            "foto": "",
            "domicilio": "Av. Revolución, No. 350",
            "cp": "37040",
            "ciudad": "León",
            "estado": "Guanajuato",
            "telefono": "4776541238"
        },
        "usuario": {
            "id": 222,
            "nombreUsuario": "ana_gomez",
            "contrasenia": "ana_g_pass",
            "rol": "ADMS"
        }
    },
    {
        "id": 3,
        "fechaContratacion": "05/03/2022",
        "clave": "NMJK760932HJK6784",
        "email": "luisa@gmail.com",
        "puesto": "Ventas",
        "salarioBruto": 9000.00,
        "estatus": 1,
        "persona": {
            "id": 33,
            "nombre": "Luisa",
            "apellidoPaterno": "Sánchez",
            "apellidoMaterno": "González",
            "genero": "M",
            "fechaNacimiento": "15/06/1995",
            "rfc": "SAGL950615HM4",
            "curp": "SAGL950615HDFPLKA1",
            "foto": "",
            "domicilio": "Calle Reforma, No. 200",
            "cp": "37100",
            "ciudad": "León",
            "estado": "Guanajuato",
            "telefono": "4775557890"
        },
        "usuario": {
            "id": 333,
            "nombreUsuario": "luisa_sg",
            "contrasenia": "luisa_pass",
            "rol": "EMPS"
        }
    },
    {
        "id": 4,
        "fechaContratacion": "28/05/2021",
        "clave": "JKBS987653GHJK432",
        "email": "carlos@gmail.com",
        "puesto": "Técnico de Sistemas",
        "salarioBruto": 10500.00,
        "estatus": 1,
        "persona": {
            "id": 44,
            "nombre": "Carlos",
            "apellidoPaterno": "Hernández",
            "apellidoMaterno": "Rodríguez",
            "genero": "H",
            "fechaNacimiento": "03/09/1987",
            "rfc": "HERC870903HJ3",
            "curp": "HERC870903HDFLKJP1",
            "foto": "",
            "domicilio": "Av. Hidalgo, No. 500",
            "cp": "37080",
            "ciudad": "León",
            "estado": "Guanajuato",
            "telefono": "4776234567"
        },
        "usuario": {
            "id": 444,
            "nombreUsuario": "carlos_hdez",
            "contrasenia": "carlos_pass",
            "rol": "EMPS"
        }
    },
    {
        "id": 5,
        "fechaContratacion": "17/01/2023",
        "clave": "HJKL876504321GHJK",
        "email": "laura@hotmail.com",
        "puesto": "Recursos Humanos",
        "salarioBruto": 12000.00,
        "estatus": 1,
        "persona": {
            "id": 55,
            "nombre": "Laura",
            "apellidoPaterno": "Torres",
            "apellidoMaterno": "Vargas",
            "genero": "M",
            "fechaNacimiento": "12/12/1989",
            "rfc": "TOVL891212MFGH2",
            "curp": "TOVL891212HDFLKJA2",
            "foto": "",
            "domicilio": "Calle Juárez, No. 150",
            "cp": "37060",
            "ciudad": "León",
            "estado": "Guanajuato",
            "telefono": "4775342190"
        },
        "usuario": {
            "id": 555,
            "nombreUsuario": "laura_torres",
            "contrasenia": "laura_pass",
            "rol": "EMPS"
        }
    }

];


//Esta funcion nos sirve para inicializar el modulo
//de empleados.
export function inicializar()
{
    //no se usa por que la funcion esta dentro del mismo metodo
    //si se usa cm cuando estas fuera del java o en el html
    fillTableEmpleado();
    setDetalleEmpleadoVisible();
}

// Insert y Update en el mismo metodo:
export function save()
{
    // Declaramos un objeto donde guardaremos los datos del empleado:
    let emp = null;
    let posicion = -1; // Para saber si un empleado ya existe o no.
    let idEmpleado = 0;

    // Revisamos si hay un ID de empleado:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        // Si posicion es mayor o igual a 0, si encontramos un empleado:
        if (posicion >= 0)
            emp = empleados[posicion];
        else
        {
            // Si no hay un empleado con el ID descrito,
            // creamos una nueva instancia del Objeto:
            emp = new Object();
            emp.id = idEmpleado;

            emp.persona = new Object();
            emp.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());

            emp.usuario = new Object();
            emp.usuario.id = parseInt(document.getElementById("txtIdUsuario").value.trim());

            // Insertamos el objeto emp dentro del arreglo de empleados:
            empleados.push(emp);
        }

        // Continuamos llenando los datos del objeto:
        // Datos de Persona:
        emp.persona.nombre = document.getElementById("txtNombre").value;
        emp.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        emp.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        emp.persona.genero = document.getElementById("cmbGenero").value;
        emp.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
        emp.persona.rfc = document.getElementById("txtRfc").value;
        emp.persona.curp = document.getElementById("txtCurp").value;
        emp.persona.domicilio = document.getElementById("txtDomicilio").value;
        emp.persona.cp = document.getElementById("txtCp").value;
        emp.persona.ciudad = document.getElementById("txtCiudad").value;
        emp.persona.estado = document.getElementById("txtEstado").value;
        emp.persona.telefono = document.getElementById("txtTelefono").value;

        // Datos del Empleado:
        emp.fechaContratacion = document.getElementById("txtFechaIngreso").value;
        emp.puesto = document.getElementById("cmbPuesto").value;
        emp.salarioBruto = document.getElementById("txtSalarioBruto").value;
        emp.email = document.getElementById("txtEmail").value;
        emp.clave = document.getElementById("txtCodigoEmpleado").value;

        // Datos de Usuario:
        emp.usuario.nombreUsuario = document.getElementById("txtNombreUsuario").value;
        emp.usuario.contrasenia = document.getElementById("txtContrasenia").value;
        emp.usuario.rol = document.getElementById("cmbRol").value;

        emp.persona.id = document.getElementById("txtIdPersona").value;
        emp.usuario.id = document.getElementById("txtIdUsuario").value;


        // Refrescamos el catalogo de empleados:
        fillTableEmpleado();

        Swal.fire('Movimiento Realizado', 'Datos de Empleado Actualizados correctamente.', 'success');
    } else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID al empleado (valor num&eacute;rico).',
                'warning');
    }
}

export function deleteEmpleado()
{
    let posicion = -1;
    let idEmpleado = 0;

    // Revisamos si hay un ID de empleado:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        // Recuperamos el ID del Empleado que deseamos eliminar:
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());

        // Buscamos la posicion del empleado con ese ID:
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        // Si la posicion del Empleado existe, lo quitamos del arreglo:
        if (posicion >= 0)
        {
            empleados.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de empleado Eliminado.', 'success');
            fillTableEmpleado();
        } else
        {
            Swal.fire('', 'El ID de empleado especificado no existe.', 'warning');
        }
    } else
    {
        Swal.fire('', 'Especifique un ID de empleado.', 'warning');
    }
}

export function getEmpleados()
{
}

//Llena la tabla de empleados
//con el arreglo.
function fillTableEmpleado()
{
    //Aqui vamos a ir guardando el contenido del
    //tbody de la tabla de empleados:
    let contenido = '';

    //Recorremos el arreglo elemento por elemento:
    for (let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                empleados[i].persona.nombre + ' ' +
                empleados[i].persona.apellidoPaterno + ' ' +
                empleados[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + empleados[i].clave + '</td>' +
                '<td>' + empleados[i].persona.rfc + '</td>' +
                '<td>' + empleados[i].email + '</td>' +
                '<td>' + empleados[i].persona.telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="fa-brands fa-wpforms"></i></a>' +
                '</td>' +
                '</tr>';
    }

    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}

export function cargarDetalleEmpleado(posicion)
{
    //Recuperamos el Empleado en la posicion indicada:
    let emp = empleados[posicion];

    // LLenamos las cajas de texto y demas controles con los datos del
    // empleado que recuperamos previamente:
    document.getElementById("txtIdEmpleado").value = emp.id;


    // Datos de Persona:
    document.getElementById("txtNombre").value = emp.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = emp.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = emp.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = emp.persona.genero;
    document.getElementById("txtFechaNacimiento").value = emp.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = emp.persona.rfc;
    document.getElementById("txtCurp").value = emp.persona.curp;
    document.getElementById("txtDomicilio").value = emp.persona.domicilio;
    document.getElementById("txtCp").value = emp.persona.cp;
    document.getElementById("txtCiudad").value = emp.persona.ciudad;
    document.getElementById("txtEstado").value = emp.persona.estado;
    document.getElementById("txtTelefono").value = emp.persona.telefono;

    // Datos del Empleado:
    document.getElementById("txtCodigoEmpleado").value = emp.clave;
    document.getElementById("txtEstatus").value = emp.estatus;
    document.getElementById("txtEmail").value = emp.email;
    document.getElementById("txtFechaIngreso").value = emp.fechaContratacion;
    document.getElementById("cmbPuesto").value = emp.puesto;
    document.getElementById("txtSalarioBruto").value = emp.salarioBruto;

    // Datos de Usuario:
    document.getElementById("txtNombreUsuario").value = emp.usuario.nombreUsuario;
    document.getElementById("txtContrasenia").value = emp.usuario.contrasenia;
    document.getElementById("cmbRol").value = emp.usuario.rol;

    document.getElementById("txtIdPersona").value = emp.persona.id;
    document.getElementById("txtIdUsuario").value = emp.usuario.id;
    
    setDetalleEmpleadoVisible(true);
}

export function clearForm()
{
    document.getElementById("txtIdEmpleado").value = '';


    // Datos de Persona:
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRfc").value = '';
    document.getElementById("txtCurp").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCp").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';

    // Datos del Empleado:
    document.getElementById("txtCodigoEmpleado").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtFechaIngreso").value = '';
    document.getElementById("cmbPuesto").value = '';
    document.getElementById("txtSalarioBruto").value = '';

    // Datos de Usuario:
    document.getElementById("txtNombreUsuario").value = '';
    document.getElementById("txtContrasenia").value = '';
    document.getElementById("cmbRol").value = '';

    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtIdUsuario").value = '';
}

// Busca la posicion de un objeto empleado
// con base en la propiedad ID y la devuelve.
// Si no se encuentra el ID buscado,
// el metodo devuelve -1.
function buscarPosicionEmpleadoPorId(id)
{
    for (let i = 0;
    i < empleados.length; i++)
    {
        if (empleados[i].id === id)
            return i;
    }
    return -1;
}

//Booleano valor
export function setDetalleEmpleadoVisible(valor)
{
    if(valor === true)
    {
        //Ocultamos la sección del catálogo de empleados
        document.getElementById("divCatalogoEmpleados").style.display = "none";
        
        //Mostramos la sección de detalle
        document.getElementById("divDetalleEmpleado").style.display = "";
    }
    else
    {
        //Ocultamos la sección del detalle de empleados
        document.getElementById("divDetalleEmpleado").style.display = "none";
        
        //Mostramos la sección del catalogo
        document.getElementById("divCatalogoEmpleados").style.display = "";
    }
}
export function clearAndShowDetalleEmpleado(){
    clearForm();
    setDetalleEmpleadoVisible(true);
}