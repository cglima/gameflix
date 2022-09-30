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
            },
            {
                nome: "Donkey Kong I",
                url: "https://jumpersroms.files.wordpress.com/2019/09/donkey-kong-1-c-snes-pt-br.jpg",
            },
            {
                nome: "Donkey Kong II",
                url: "https://static.emulatorgames.net/images/super-nintendo/donkey-kong-country-2-diddys-kong-quest-1-1.jpg",
            },
            {
                nome: "Donkey Kong III",
                url: "https://1.bp.blogspot.com/-KlsYTIth3Dg/Xnlu5vc_kaI/AAAAAAAAAgI/iJIx3tdTvAsmY7jlqGbc3Uf5fbguX01EQCLcBGAsYHQ/s1600/DK.jpg",
            },
            {
                nome: "Super Mario Kart",
                url: "https://joysticknervoso.files.wordpress.com/2017/02/super_mario_kart.jpg",
            },
            {
                nome: "Super Mario World",
                url: "https://jumpersroms.files.wordpress.com/2020/08/super-mario-world-2-pt-br-c-snes.jpg?w=940",
            },
            {
                nome: "The Legend of Zelda",
                url: "https://jumpersroms.files.wordpress.com/2020/03/the-legend-of-zelda-a-link-to-the-past-pt-br-c-snes.jpg",
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
            },
            {
                nome: "Harvest Moon",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ--D-FkRdE6-OUWhhzS63y-gSS8s_xDLYiw&usqp=CAU",
            },
            {
                nome: "Crash Bandicoot I",
                url: "https://www.gamulator.com/img/roms/crash-bandicoot-warped-PS1-cover.jpg",
            },
            {
                nome: "Legend Of Mana",
                url: "https://www.gamulator.com/img/roms/legend-of-mana-ps1-cover-slus-01013-340x483.jpg",
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
            },
            {
                nome: "LocoRoco2",
                url: "https://cache.downloadroms.io/static/da13fa03f9af224ad0eebc1e65791f742562f805/image.jpeg",
            },
            {
                nome: "Monster Hunter",
                url: "https://www.gamulator.com/img/roms/monster-hunter-freedom-unite-psp-cover.jpg",
            },
            {
                nome: "Monster Hunter 3",
                url: "https://www.gamulator.com/img/roms/monster-hunter-portable-3RD-psp-cover-japan.jpg",
            },
            {
                nome: "The Kingdom Hearts",
                url: "https://www.gamulator.com/img/roms/kingdom-hearts-birth-by-sleep-psp-cover.jpg",
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
            },
            {
                nome: "Horizon Zero Dawn",
                url: "https://sm.ign.com/ign_br/game/h/horizon-ze/horizon-zero-dawn-1_xv24.jpg",
            },
            {
                nome: "Monster Hunter World",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoSPNJHP4YgBG4WHK-df-zo25MJTciOvcT4ixrcxKmxKMpDWif4BBDEqGp7pss1mkmF0&usqp=CAU",
            },
            {
                nome: "Monster Hunter IceBorn",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjibtY_bxsr5RbGQKb4rH0QpLf5ErcAWzyA&usqp=CAU",
            },
            {
                nome: "Overcooked",
                url: "https://smartcdkeys.com/image/data/products/Overcooked-PS4/cover/Overcooked-PS4-smartcdkeys-cheap-cd-key-cover.jpg",
            },
            {
                nome: "Portal Knights",
                url: "https://m.media-amazon.com/images/I/71-2rjtO3CL._AC_SX522_.jpg",
            },
            {
                nome: "Overcooked 2",
                url: "https://m.media-amazon.com/images/I/81T1dOwDD0L.jpg",
            },
            {
                nome: "The Last Guardian",
                url: "https://m.media-amazon.com/images/I/6141ElAv+SS._AC_SX385_.jpg",
            },
            {
                nome: "The Witness",
                url: "https://static.wixstatic.com/media/c8fcd4_417391fb837f4384b05caf29d3ce4eb4~mv2.jpg/v1/fill/w_456,h_575,al_c,q_85/c8fcd4_417391fb837f4384b05caf29d3ce4eb4~mv2.jpg",
            },
        ],
    },
    online: {
        id: "online",
        nome: "Online",
        jogos: [
            {
                nome: "EuroTruck",
                url: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_616x353.jpg?t=1656428921",
            },
            {
                nome: "Nexomon",
                url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1191580/header.jpg?t=1661675530",
            },
            {
                nome: "Stardew Valley",
                url: "https://cdn.cloudflare.steamstatic.com/steam/apps/440820/capsule_616x353.jpg?t=1581550226",
            },
            {
                nome: "Terraria",
                url: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560",
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
            },
            {
                nome: "Guardian Tales",
                url: "https://static-cdn.jtvnw.net/ttv-boxart/517357_IGDB-285x380.jpg",
            },
            {
                nome: "PunBall",
                url: "https://imag.malavida.com/mvimgbig/download-fs/punball-33990-0.jpg",
            },
            {
                nome: "Random Dice",
                url: "https://static-cdn.jtvnw.net/ttv-boxart/517746_IGDB-272x380.jpg",
            },
            {
                nome: "Survivor.io",
                url: "https://www.writerparty.com/wp-content/uploads/9DDF0969-DE0D-4D41-8DA1-AA24A55EB08E.jpeg.webp",
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
