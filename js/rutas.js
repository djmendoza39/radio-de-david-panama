let tiempo;

const iraInicio = (id, tiempo) => {
     tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}
const iraRuta = (id, tiempo) => {
     tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}

const iraNosotros = (id, tiempo) => {
    tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}

const iraApp = (id, tiempo) => {
    tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}

const iraContacto = (id, tiempo) => {
    tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}

iraInicio(id, tiempo);
iraNosotros(id, tiempo);
iraApp(id, tiempo);
iraContacto(id, tiempo);