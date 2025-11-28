

function customRender(reactElement, container) {

    // const docElement = document.createElement(reactElement.type);
    // docElement.innerHTML = reactElement.Children;
    // docElement.setAttribute('href',reactElement.props.href);
    // docElement.setAttribute('target',reactElement.props.target);

    // container.appendChild(docElement);

    const domEleement = document.createElement(reactElement.type);
    domEleement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
       
        if (prop === reactElement.Children) continue;
        domEleement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domEleement);
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)