function createElementsForCopy(text: string): HTMLDivElement {
    let div: HTMLDivElement = document.createElement('div');

    let style: CSSStyleDeclaration = div.style;

    style.position = "fixed";
    style.left = "-100%";

    let pre: HTMLPreElement = document.createElement("pre");
    pre.textContent = text;

    div.appendChild(pre);

    return div;
}

export function copy(text: string): boolean {
    let div: HTMLDivElement = createElementsForCopy(text);

    document.body.appendChild(div);

    document.getSelection().selectAllChildren(div);

    let copied: boolean = document.execCommand("copy");

    div.remove();

    return copied;
}