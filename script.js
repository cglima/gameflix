// OK
function adicionarJogo() {
    const nomeJogo = document.getElementById("nomeDoJogo").value;
    const urlJogo = document.getElementById("link").value;
    const tipoDeJogo = document.getElementById("tipoDeJogo").value;

    const jogo = {
        nome: nomeJogo,
        url: urlJogo,
    };

    const lista = todosJogos[tipoDeJogo].jogos;

    let aviso = "";
    if (existeJogo(jogo, lista)) {
        aviso = "Esse jogo já foi adicionado! Escolha outro jogo.";
    } else {
        lista.push(jogo);
        renderizaJogos();
        document.getElementById("nomeDoJogo").value = "";
        document.getElementById("link").value = "";
        aviso = "Jogo adicionado com sucesso!";
    }

    document.getElementById("aviso").innerHTML = aviso;
}

function removerJogo(lista, jogo) {
    lista.jogos = lista.jogos.filter((j) => {
        return j.nome != jogo.nome;
    });

    renderizaJogos();
}

// OK
function existeJogo(jogo, lista) {
    var existe = false;
    for (var i = 0; i < lista.length; i++) {
        if (jogo.nome === lista[i].nome) {
            existe = true;
            break;
        }
    }
    return existe;
}

// OK
function renderizaListaJogos(lista) {
    var itemsDaLista = lista.jogos.map((jogo) => {
        const li = document.createElement("li");
        li.setAttribute("class", "gameList");

        const img = document.createElement("img");
        img.setAttribute("src", jogo.url);
        img.onclick = () => {
            openModal(lista, jogo);
            return false;
        };

        const span = document.createElement("span");
        span.innerHTML = jogo.nome;

        const buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("class", "delete");
        buttonDelete.innerHTML = "x";
        buttonDelete.onclick = () => {
            removerJogo(lista, jogo);
            return false;
        };

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(buttonDelete);

        return li;
    });

    const sessao = document.createElement("section");
    sessao.setAttribute("id", `jogos-${lista.id}`);
    sessao.setAttribute("class", "container");

    linkTopo = document.createElement("a");
    linkTopo.setAttribute("href", "#top");
    linkTopo.setAttribute("class", "linkTopo");
    linkTopo.innerHTML = "⬆";

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "page-games");
    h3.innerHTML = lista.nome;

    const ul = document.createElement("ul");
    ul.setAttribute("id", `lista-jogos-${lista.id}`);

    itemsDaLista.forEach((li) => {
        ul.appendChild(li);
    });

    sessao.appendChild(linkTopo);
    sessao.appendChild(h3);
    sessao.appendChild(ul);

    return sessao;
}

// OK
function renderizaJogos() {
    const main = document.getElementById("todos-jogos");

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const sessoes = [];

    for (const lista in todosJogos) {
        sessoes.push(renderizaListaJogos(todosJogos[lista]));
    }

    sessoes.forEach((sessao) => {
        main.appendChild(sessao);
    });
}

// OK
var todosJogos = {
    snes: {
        id: "snes",
        nome: "Snes",
        jogos: [
            {
                nome: "Alladin",
                url: "https://metagalaxia.com.br/wp-content/uploads/2018/01/Aladdin-disney-snes-super-nintendo-02.jpg",
                descricao: `O Disney's Aladdin é um jogo de plataforma baseado no filme de 1992 do mesmo nome,
                desenvolvido pela Virgin Games USA. O jogo foi lançado pela Sega para o Sega Genesis
                em 11 de novembro de 1993 como um dos vários jogos baseados no filme,
                incluindo outro jogo lançado no mesmo mês pela Capcom para o Super NES`,
            },
            {
                nome: "Goof Troop",
                url: "https://pbs.twimg.com/media/Exb5jmAXEAMoktu.jpg",
                descricao: `Goof Troop é um jogo de ação-aventura e puzzles desenvolvido pela Capcom e lançado em 1993
                na América do Norte e Europa e em 1994 no Japão. O jogo é baseado na série de mesmo nome.
                Antes de começar a jogar o jogador pode escolher entre ser Max ou Pateta no modo single player`,
            },
            {
                nome: "Donkey Kong I",
                url: "https://jumpersroms.files.wordpress.com/2019/09/donkey-kong-1-c-snes-pt-br.jpg",
                descricao: `Donkey Kong é uma série de jogos eletrônicos da Nintendo,
                criada por Shigeru Miyamoto que gira em torno do personagem Donkey Kong.`,
            },
            {
                nome: "Donkey Kong II",
                url: "https://static.emulatorgames.net/images/super-nintendo/donkey-kong-country-2-diddys-kong-quest-1-1.jpg",
                descricao: `Donkey Kong Country 2: Diddy's Kong Quest é um jogo eletrônico de plataforma desenvolvido
                pela Rare e publicado pela Nintendo em novembro de 1995 para o Super Nintendo Entertainment System.
                É o segundo jogo da série Donkey Kong Country.`,
            },
            {
                nome: "Donkey Kong III",
                url: "https://1.bp.blogspot.com/-KlsYTIth3Dg/Xnlu5vc_kaI/AAAAAAAAAgI/iJIx3tdTvAsmY7jlqGbc3Uf5fbguX01EQCLcBGAsYHQ/s1600/DK.jpg",
                descricao: `Donkey Kong Country 3: Dixie Kong's Double Trouble! é um jogo eletrônico de plataforma desenvolvido
                pela Rare e publicado pela Nintendo para o Super Nintendo Entertainment System em 1996.
                É a terceiro título da série Donkey Kong Country e serve como uma sequência direta
                de Donkey Kong Country 2: Diddy's Kong Quest.`,
            },
            {
                nome: "Super Mario Kart",
                url: "https://joysticknervoso.files.wordpress.com/2017/02/super_mario_kart.jpg",
                descricao: `Super Mario Kart é um jogo eletrônico de corrida com personagens da série Mario lançado em
                1992 para o Super Nintendo.`,
            },
            {
                nome: "Super Mario World",
                url: "https://jumpersroms.files.wordpress.com/2020/08/super-mario-world-2-pt-br-c-snes.jpg?w=940",
                descricao: `Super Mario World, originalmente chamado no Japão de Super Mario Bros. 4,
                é um jogo eletrônico de plataforma desenvolvido pela Nintendo Entertainment Analysis & Development
                e publicado pela Nintendo, em 1990, para o console Super Nintendo Entertainment System`,
            },
            {
                nome: "The Legend of Zelda",
                url: "https://jumpersroms.files.wordpress.com/2020/03/the-legend-of-zelda-a-link-to-the-past-pt-br-c-snes.jpg",
                descricao: `É o terceiro jogo da série The Legend of Zelda, e foi lançado em 1991 no Japão e em 1992
                na América do Norte e Europa. O lançamento foi um sucesso comercial e de crítica, sendo um marco para a Nintendo
                e é considerado como um dos melhores jogos de todos os tempos, inclusive pelo seu enredo, e vendeu mais de
                quatro milhões de cópias em todo mundo.`,
            },
        ],
    },
    ps1: {
        id: "ps1",
        nome: "Ps1",
        jogos: [
            {
                nome: "Crash Bandicoot",
                url: "https://www.gamulator.com/img/roms/crash-bandicoot-psx.jpg",
                descricao: `Crash Bandicoot é o primeiro jogo da série lançado pela Naughty Dog em 1996. O jogo se passa nas fictícias ilhas Wumpa,
                um arquipélago situado na costa noroeste da Austrália e possui 32 fases, sendo seis delas de chefes e duas fases secretas.`,
            },
            {
                nome: "Harvest Moon",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ--D-FkRdE6-OUWhhzS63y-gSS8s_xDLYiw&usqp=CAU",
                descricao: `Harvest Moon: Back to Nature foi o quinto jogo da franquia Harvest Moon,
                sendo o terceiro produzido para consoles de mesa.`,
            },
            {
                nome: "Legend Of Mana",
                url: "https://www.gamulator.com/img/roms/legend-of-mana-ps1-cover-slus-01013-340x483.jpg",
                descricao: `Legend of Mana é um jogo eletrônico do gênero RPG,
                lançado no final de 2000 (1999 no Japão) para PlayStation.
                O jogo possibilita a escolha de um personagem masculino ou feminino e possui vários personagens
                espalhados pelo mundo do jogo que entrarão para seu grupo para que ajude nas missões dele e vice versa,
                ademais, um segundo jogador pode se juntar ao jogo ao conectar um segundo controle e controlar estes companheiros.`,
            },
        ],
    },
    psp: {
        id: "psp",
        nome: "Psp",
        jogos: [
            {
                nome: "Harvest Moon",
                url: "https://www.gamulator.com/img/roms/harvest-moon-boy-girl-psp-cover.jpg",
                descricao: `Sucesso nos consoles de mesa, garoto e garota descobrem as maravilhas
                da vida no campo no portátil da Sony.`,
            },
            {
                nome: "LocoRoco2",
                url: "https://cache.downloadroms.io/static/da13fa03f9af224ad0eebc1e65791f742562f805/image.jpeg",
                descricao: `ocoRoco 2 é um jogo de plataforma desenvolvido pela Japan Studio e publicado pela Sony Computer Entertainment.
                É a sequência do LocoRoco de 2006 e foi lançado para o console portátil PSP em 2008.`,
            },
            {
                nome: "Monster Hunter",
                url: "https://www.gamulator.com/img/roms/monster-hunter-freedom-unite-psp-cover.jpg",
                descricao: `Monster Hunter Freedom Unite é um game de ação e aventura,
                que possui alguns elementos de progressão de personagem RPGs tradicionais.O objetivo é começar a carreira
                como um caçador de monstros e desenvolver suas habilidades para conseguir eliminar
                as mais perigosas criaturas de seu mundo. Recebendo missões que em sua maioria incluem
                o extermínio de um determinado monstro, ao longo do caminho, o jogador vai aperfeiçoar suas técnicas
                e seus itens de modo a completar seus objetivos e assim, conseguir chegar até o maior e mais perigoso
                monstro de uma região. `,
            },
            {
                nome: "Monster Hunter 3",
                url: "https://www.gamulator.com/img/roms/monster-hunter-portable-3RD-psp-cover-japan.jpg",
                descricao: `Monster Hunter Portable 3rd é a terceira parcela da franquia Monster Hunter,
                desenvolvida pela Capcom para o PlayStation Portable`,
            },
            {
                nome: "The Kingdom Hearts",
                url: "https://www.gamulator.com/img/roms/kingdom-hearts-birth-by-sleep-psp-cover.jpg",
                descricao: `Kingdom Hearts Birth by Sleep é um jogo eletrônico RPG de ação desenvolvido e
                publicado pela Square Enix. É o sexto título da série Kingdom Hearts e foi lançado exclusivamente para
                o PlayStation Portable em 9 de janeiro de 2010 no Japão, 7 de setembro na América do Norte e
                em 10 de setembro de na região PAL.`,
            },
        ],
    },
    ps4: {
        id: "ps4",
        nome: "Ps4",
        jogos: [
            {
                nome: "Journey",
                url: "https://gameroom.lt/1214/journey-collectors-edition.jpg",
                descricao: `Journey é um jogo eletrônico independente desenvolvido pela Thatgamecompany para o PlayStation 3,
                PlayStation 4 e Microsoft Windows. Foi lançado em 13 de março de 2012 na PlayStation Network`,
            },
            {
                nome: "Horizon Zero Dawn",
                url: "https://sm.ign.com/ign_br/game/h/horizon-ze/horizon-zero-dawn-1_xv24.jpg",
                descricao: `Horizon Zero Dawn é um jogo eletrônico de RPG de ação pós-apocalíptico em um mundo aberto,
                desenvolvido pela Guerrilla Games, apresentado em 2015 na conferencia da Sony na feira E3 e lançado em
                28 de fevereiro de 2017 para o console PlayStation 4 e em 7 de agosto de 2020 para o sistema Microsoft Windows`,
            },
            {
                nome: "Monster Hunter World",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoSPNJHP4YgBG4WHK-df-zo25MJTciOvcT4ixrcxKmxKMpDWif4BBDEqGp7pss1mkmF0&usqp=CAU",
                descricao: `Monster Hunter: World é um jogo de RPG eletrônico de ação desenvolvido e publicado pela Capcom.
                O jogo faz parte da série Monster Hunter, foi lançado mundialmente em 26 de janeiro de 2018 para PlayStation
                4 e Xbox One e em 9 de agosto de 2018 para Windows.`,
            },
            {
                nome: "Monster Hunter IceBorn",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjibtY_bxsr5RbGQKb4rH0QpLf5ErcAWzyA&usqp=CAU",
                descricao: `Monster Hunter World: Iceborne é um pacote de expansão desenvolvido e publicado pela Capcom
                para o RPG de ação de 2018 Monster Hunter: World.`,
            },
            {
                nome: "Overcooked",
                url: "https://smartcdkeys.com/image/data/products/Overcooked-PS4/cover/Overcooked-PS4-smartcdkeys-cheap-cd-key-cover.jpg",
                descricao: `Overcooked é um jogo caótico de cooperação na cozinha para um a quatro jogadores.
                Trabalhando em equipe, você e seus colegas chefes de cozinha precisam preparar, cozinhar e servir uma
                variedade de pedidos deliciosos antes que os clientes chatos saiam irritados. Afiem as facas e
                tirem o pó dos seus uniformes de chefes de cozinha, não tem lugar para erros nem do tamanho de um cogumelo,
                pois as "postas" são elevadas nestas cozinhas malucas!`,
            },
            {
                nome: "The Last Guardian",
                url: "https://m.media-amazon.com/images/I/6141ElAv+SS._AC_SX385_.jpg",
                descricao: `The Last Guardian, chamado no Japão de Hitokui no Ōwashi Toriko,
                é um jogo eletrônico de ação-aventura desenvolvido pela SIE Japan Studio e genDesign e
                publicado pela Sony Interactive Entertainment. Foi lançado exclusivamente para PlayStation 4 em 6 de dezembro de 2016.`,
            },
            {
                nome: "The Witness",
                url: "https://static.wixstatic.com/media/c8fcd4_417391fb837f4384b05caf29d3ce4eb4~mv2.jpg/v1/fill/w_456,h_575,al_c,q_85/c8fcd4_417391fb837f4384b05caf29d3ce4eb4~mv2.jpg",
                descricao: `The Witness é um jogo de mundo aberto para um jogador, com dezenas de locais para explorar e
                mais de 500 puzzles para você solucionar. O jogo respeita você como um jogador inteligente e valoriza o seu tempo.
                O gameplay vai direto ao ponto e cada puzzle contribui de maneira única com o conjunto da experiência.
                Em resumo, este é um jogo repleto de ideias.`,
            },
        ],
    },
    online: {
        id: "online",
        nome: "Online",
        jogos: [
            {
                nome: "Nexomon",
                url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1191580/header.jpg?t=1661675530",
                descricao: `Retorne à clássica captura de monstros, com uma história inédita,
                personagens excêntricos e mais de 300 Nexomon únicos para capturar e treinar.
                Entre para a Tamer's Guild (Guilda dos Domadores) e comece uma jornada épica para restaurar o
                equilíbrio antes que toda esperança se perca…`,
            },
            {
                nome: "Stardew Valley",
                url: "https://cdn.cloudflare.steamstatic.com/steam/apps/440820/capsule_616x353.jpg?t=1581550226",
                descricao: `O título traz elementos que lembram Minecraft e Terraria em um cenário rural típico da série
                clássica Harvest Moon. O resultado é um jogo com história carismática, uma jogabilidade viciante e com
                muito conteúdo para ser explorado. Fugindo da cidade moderna, o jogador herda uma fazenda na pacata
                Stardew Valley e deve aprender a cultivar, criar animais e conviver em comunidade para construir laços em
                sua nova vida no campo e até mesmo formar uma família, já que há a possibilidade de se casar com personagens
                como Abigail e Leah`,
            },
            {
                nome: "Terraria",
                url: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560",
                descricao: `Terraria é um jogo eletrônico RPG de ação-aventura independente produzido pela desenvolvedora de
                jogos Re-Logic. Possui como características a exploração, artesanato, construção de estruturas e combate a
                monstros perigosos em um mundo 2D gerado proceduralmente.`,
            },
        ],
    },
    mobile: {
        id: "mobile",
        nome: "Mobile",
        jogos: [
            {
                nome: "Empires & Puzzles",
                url: "https://static-cdn.jtvnw.net/ttv-boxart/510811_IGDB-285x380.jpg",
                descricao: `Empires & Puzzles é uma lufada de ar fresco nos jogos RPG, juntando batalhas de combinar 3
                à construção de uma fortaleza poderosa - acrescido de emocionantes duelos de PvP.`,
            },
            {
                nome: "PunBall",
                url: "https://imag.malavida.com/mvimgbig/download-fs/punball-33990-0.jpg",
                descricao: `PunBall é um jogo que combina RPG e características "roguelike" para mergulhar você
                no famoso universo de Archero, porém com um enredo completamente novo.
                Aqui você estará encarregado de ajudar um jovem mago em sua jornada em defesa da humanidade contra toda
                a sorte de diferentes inimigos.`,
            },
            {
                nome: "Random Dice",
                url: "https://static-cdn.jtvnw.net/ttv-boxart/517746_IGDB-272x380.jpg",
                descricao: `Tudo pronto para um embate Dadônico?
                Comande sua equipe de dados superpoderosos!
                Faça fusões, suba de nível e defenda seu território contra ondas sem fim de monstros chefes!`,
            },
            {
                nome: "Survivor.io",
                url: "https://www.writerparty.com/wp-content/uploads/9DDF0969-DE0D-4D41-8DA1-AA24A55EB08E.jpeg.webp",
                descricao: `Zumbis perigosos estão atacando toda a cidade! A cidade está em perigo!
                Despertado pelo julgamento dos sonhos, você não tem escolha a não ser assumir o manto heróico de salvar a cidade!
                Como um guerreiro humano com potencial ilimitado, você e outros sobreviventes terão que pegar suas armas
                e lutar contra esses zumbis malignos e perigosos!
                A horda supera em muito você - qualquer deslize e você será pego em apuros!
                Diante da crise, você deve encontrar uma maneira de sobreviver!`,
            },
        ],
    },
};

renderizaJogos();

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function openModal(lista, jogo) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    const titulo = document.getElementById("tituloModal");
    titulo.innerHTML = jogo.nome;

    const img = document.getElementById("imgModal");
    img.setAttribute("src", jogo.url);
    img.setAttribute("alt", jogo.nome);

    const descricao = document.getElementById("descricaoModal");
    descricao.innerHTML = jogo.descricao;

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var span = document.getElementsByClassName("close")[0];
}
