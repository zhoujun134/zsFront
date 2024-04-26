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
        }
        if (level == "2") {
            if (result.length > 0) {
                let parentItem = result[result.length - 1];
                if (parentItem.level == "1") {
                    addChildrenTocItem(parentItem, tocTocH);
                } else {
                    result.push(tocTocH);
                }
            } else {
                result.push(tocTocH);
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
                        }
                    } else {
                        parentItem.children = [tocTocH]
                    }
                } else {
                    result.push(tocTocH);
                }
            } else {
                result.push(tocTocH);
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
}
//
// /**
//  * 生成文档目录
//  */
// export function generateTocList(): TocItem[] {
//     let allHeadings: NodeList = document.querySelectorAll('h1, h2, h3')
//     let tocTocH1 = null;
//     for (let index = 0; index < allHeadings.length; index++) {
//         let item: Node | null = allHeadings.item(index);
//         if (item) {
//             let tagName: string = item.nodeName.toLowerCase();
//             let idH1: string = 'toc-h1-a-' + index;
//             let textContent: string = item.textContent ? item.textContent : '';
//             if (tagName != 'h1') {
//                 continue
//             }
//             let htmlAnchorElement = createOneAnchor(idH1, textContent);
//             tocTocH1 = {
//                 id: idH1,
//                 url: '#' + htmlAnchorElement.id,
//                 text: textContent
//             } as TocItem;
//             item.textContent = ''
//             item.appendChild(htmlAnchorElement);
//             // 二级标题
//             for (let j = index + 1; j < allHeadings.length; j++) {
//                 let childH2: Node | null = allHeadings.item(j);
//                 if (childH2 && childH2.nodeName.toLowerCase() != 'h2') {
//                     continue
//                 }
//                 if (childH2) {
//                     let idH2: string = 'toc-h2-a-' + j;
//                     let textContentH2: string = childH2.textContent ? childH2.textContent : '';
//                     let htmlAnchorElement2 = createOneAnchor(idH2, textContentH2);
//                     childH2.textContent = ''
//                     childH2.appendChild(htmlAnchorElement2);
//                     let tocTocH2 = {
//                         id: idH2,
//                         url: '#' + htmlAnchorElement2.id,
//                         text: textContentH2
//                     } as TocItem;
//                     if (tocTocH1.children) {
//                         tocTocH1.children.push(tocTocH2)
//                     } else {
//                         tocTocH1.children = [tocTocH2]
//                     }
//                     // 三级标题处理
//                     for (let k = j + 1; k < allHeadings.length; k++) {
//                         let childH3: Node | null = allHeadings.item(k);
//                         if (childH3 && childH3.nodeName.toLowerCase() != 'h3') {
//                             break
//                         }
//                         if (childH3) {
//                             let idH3: string = 'toc-h3-a-' + k;
//                             let textContentH3: string = childH3.textContent ? childH3.textContent : '';
//                             let htmlAnchorElement3 = createOneAnchor(idH3, textContentH3);
//                             childH3.textContent = ''
//                             childH3.appendChild(htmlAnchorElement3);
//                             let tocTocH3 = {
//                                 id: idH3,
//                                 url: '#' + htmlAnchorElement3.id,
//                                 text: textContentH3
//                             } as TocItem;
//                             if (tocTocH2.children) {
//                                 tocTocH2.children.push(tocTocH3)
//                             } else {
//                                 tocTocH2.children = [tocTocH3]
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     if (tocTocH1) {
//         return [tocTocH1]
//     }
//     return []
// }

/**
 * 处理点击一个目录时，跳转到指定的内容上
 * @param data
 */
export function handleNodeClick(data: TocItem): void {
    window.location.href = data.url;
}
