if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote",
        time: 5000, // tempo de transição dos slides
    });
    
    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true,
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleForm) {
    new SimpleForm ({
        form: ".formphp",
        button: "#enviar",
        erro: "<div id='form-erro'><h3>Erro no envio!</h3><p>Um erro ocorreu, tente para o e-mail contato@bikcraft.com</p></div>",
        sucesso: "<div id='form-sucesso'><h3>Formulário enviado com sucesso</h3><p>Em breve eu entro em contato com você.</p></div>",
    });
}

