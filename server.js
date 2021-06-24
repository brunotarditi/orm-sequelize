const db = require("./src/database/models");
const controllerTutorial = require('./src/controller/tutorialController');
const controllerComments = require('./src/controller/commentsController');
const controllerDomicilio = require('./src/controller/domicilioController');
const controllerPersona = require('./src/controller/personaController');
const run = async () => {

    const tut1 = await controllerTutorial.create({
        title: "Tut#1",
        description: "Tut#1 Description",
    });

    console.log('--------CREO EL TUTO 2-------');
  

    const tut2 = await controllerTutorial.create({
   
        title: "Tut#2",
        description: "Tut#2 Description",
    });


    const comment1 = await controllerComments.create(tut1.id, {
        name: "alumno1",
        text: "buen trabajo1",
    });

    await controllerComments.create(tut1.id, {
        name: "alumno2",
        text: "buen trabajo2",
    });

    const comment2 = await controllerComments.create(tut2.id, {
        name: "alumno3",
        text: "buen trabajo3",
    });

    await controllerComments.create(tut2.id, {
        name: "alumno4",
        text: "buen trabajo4",
    });

//Get Tutorial by given id
    console.log('------BUSCO POR ID UN TUTO --------');
    const tut1Data = await controllerTutorial.findTutorialById(tut1.id);
    console.log(">> Tutorial id=" );
    console.log(">> Tutorial id=" + tut1Data.id,JSON.stringify(tut1Data, null, 2));

    const tut2Data = await controllerTutorial.findTutorialById(tut2.id);
    console.log(">> Tutorial id=" + tut2Data.id,JSON.stringify(tut2Data, null, 2)
    );

//Get Comment by given id
console.log('------BUSCO POR ID UN COMENTARIO --------');
const comment1Data = await controllerComments.findCommentById(comment1.id);
console.log( ">> Comment id=" + comment1.id, JSON.stringify(comment1Data, null, 2)
);

const comment2Data = await controllerComments.findCommentById(comment2.id);
console.log(">> Comment id=" + comment2.id,JSON.stringify(comment2Data, null, 2)
);

//Get all Tutorials

const tutorials = await controllerTutorial.findAll();
console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));

    const dom1 = await controllerDomicilio.create({
        calle: "Dom#1 Calle",
        numero: 1234,
    });

        console.log('--------CREO EL DOMICILIO 2-------');
  

    const dom2 = await controllerDomicilio.create({
   
        calle: "Dom#2 Calle",
        numero: 4567,
    });


    const persona1 = await controllerPersona.create(dom1.id, {
        nombre: "persona1",
        apellido: "apellidoPersona1",
        dni: 12345678
    });

    await controllerPersona.create(dom1.id, {
        nombre: "persona2",
        apellido: "apellidoPersona2",
        dni: 87654321
    });

    const persona2 = await controllerPersona.create(dom2.id, {
        nombre: "persona3",
        apellido: "apellidoPersona1",
        dni: 78945612
    });

    await controllerPersona.create(dom2.id, {
        nombre: "persona4",
        apellido: "apellidoPersona4",
        dni: 45678912
    });

    //Get Domicilio by given id
    console.log('------BUSCO POR ID UN DOMICILIO --------');
    const dom1Data = await controllerDomicilio.findDomicilioById(dom1.id);
    console.log(">> Domicilio id=" );
    console.log(">> Domicilio id=" + dom1Data.id,JSON.stringify(dom1Data, null, 2));

    const dom2Data = await controllerDomicilio.findDomicilioById(dom2.id);
    console.log(">> Domicilio id=" + dom2Data.id,JSON.stringify(dom2Data, null, 2)
    );

//Get Persona by given id
console.log('------BUSCO POR ID UNA PERSONA --------');
const persona1Data = await controllerPersona.findPersonaById(persona1.id);
console.log( ">> Persona id=" + persona1.id, JSON.stringify(persona1Data, null, 2)
);

const persona2Data = await controllerPersona.findPersonaById(persona2.id);
console.log(">> Persona id=" + persona2.id,JSON.stringify(persona2Data, null, 2)
);

//Get all Domicilios

const domicilios = await controllerDomicilio.findAll();
console.log(">> All domicilios", JSON.stringify(domicilios, null, 2));

};

// db.sequelize.sync();
db.sequelize.sync({ force: false}).
then(() => {
    console.log("Drop and re-sync db.");

    console.log('entre a run crear tutorial');
    run();
});