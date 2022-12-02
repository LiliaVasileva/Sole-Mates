import {page, render} from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/nav.js';
import { showLogin } from './views/login.js';
import { showHome } from './views/home.js';



const main = document.querySelector('main');

page(decorateContext);
page('/login', showLogin);
page('/', showHome);
// page('/catalog', showCatalog);
// page('/catalog/:id', showDetails);
// page('/edit/:id', showEdit);
// page('/create', showCreate);
// page('/register', showRegister);

updateNav();
page.start();


function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();

    if (user){
        ctx.user = user;
    }

    next();
}

function renderMain(content){
    render(content, main);
}