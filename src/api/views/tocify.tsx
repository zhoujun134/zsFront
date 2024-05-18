import {ref} from "vue";

export interface TocItem {
    id: string;
    url: string;
    text: string;
    level: string;
    children?: TocItem[];
}

/**
 * 创建一个超链接
 * @param id
 * @param textContent
 */
export function createOneAnchor(id: string, textContent: string): HTMLAnchorElement {
    let anchor = document.createElement('a');
    anchor.id = id
    anchor.href = '#' + anchor.id;
    anchor.textContent = textContent;
    anchor.className = 'toc-link';
    return anchor
}

export const tocTotalLength = ref<number>(0)

export function generateTocList(): TocItem[] {
    let allHeadings: NodeList = document.querySelectorAll('h1, h2, h3')
    const result: TocItem[] = [];
    for (let index: number = 0; index < allHeadings.length; index++) {
        let item: Node | null = allHeadings.item(index);
        if (item == null) {
            continue
        }
        let level: string = item.nodeName.toLowerCase().substring(1);
        let idH: string = 'toc-h-a-' + index;
        let textContent: string = item.textContent ? item.textContent : '';
        let htmlAnchorElement = createOneAnchor(idH, textContent);
        let tocTocH: TocItem = {
            id: idH,
            level: level,
            url: '#' + htmlAnchorElement.id,
            text: textContent
        } as TocItem;
        item.textContent = ''
        item.appendChild(htmlAnchorElement);
        if (level == "1") {
            result.push(tocTocH)
            tocTotalLength.value += 1;
        }
        if (level == "2") {
            if (result.length > 0) {
                let parentItem = result[result.length - 1];
                if (parentItem.level == "1") {
                    addChildrenTocItem(parentItem, tocTocH);
                } else {
                    result.push(tocTocH);
                    tocTotalLength.value += 1;
                }
            } else {
                result.push(tocTocH);
                tocTotalLength.value += 1;
            }
        }
        if (level == "3") {
            if (result.length > 0) {
                let parentItem = result[result.length - 1];
                if (parentItem.level == "1" || parentItem.level == "2") {
                    let level2Children = parentItem.children
                    if (level2Children) {
                        if (level2Children.length > 0) {
                            let childParent = level2Children[level2Children.length - 1];
                            addChildrenTocItem(childParent, tocTocH);
                        } else {
                            level2Children.push(tocTocH);
                            tocTotalLength.value += 1;
                        }
                    } else {
                        parentItem.children = [tocTocH]
                        tocTotalLength.value += 1;
                    }
                } else {
                    result.push(tocTocH);
                    tocTotalLength.value += 1;
                }
            } else {
                result.push(tocTocH);
                tocTotalLength.value += 1;
            }
        }
    }
    return result;
}

function addChildrenTocItem(parentToc: TocItem, child: TocItem): void {
    if (parentToc.children) {
        parentToc.children.push(child)
    } else {
        parentToc.children = [child]
    }
    tocTotalLength.value += 1;
}

/**
 * 处理点击一个目录时，跳转到指定的内容上
 * @param data
 */
export function handleNodeClick(data: TocItem): void {
    window.location.href = data.url;
}
